import { getPlaiceholder } from "plaiceholder";
import { client } from "../lib/client";
import { urlFor } from "../lib/image";

// Recursive function to find and process images within nested structures
const processImagesRecursively = async (obj) => {
    if (!obj || typeof obj !== "object") return;

    for (const key in obj) {
        const value = obj[key];

        // Check if the value is an image object with an asset
        if (value?.asset && value?.asset._ref) {
            if (!value.placeholder) {
                // Generate the placeholder if it doesn’t exist
                const imageUrl = urlFor(value.asset);
                const response = await fetch(imageUrl);
                const arrayBuffer = await response.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                const { base64 } = await getPlaiceholder(buffer);

                // Add the placeholder to the image object
                value.placeholder = base64;

                // Optionally, update Sanity with the new placeholder
                await client
                    .patch(value.asset._ref)
                    .set({ placeholder: base64 })
                    .commit();
            }
        } else if (typeof value === "object") {
            // Recurse through nested objects
            await processImagesRecursively(value);
        }
    }
};

export const fetchPageData = async (slug) => {
    const query = `
        *[_type == "page" && slug.current == $slug]{
            _id,
            "slug": slug.current,
            sections[]{
                ...,
                components[]{
                    ...,
                    products[]->{
                        ...,
                    }
                }
            }
        }[0]
    `;
    const params = { slug };
    const data = await client.fetch(query, params);

    // Process sections to add placeholders to any images found
    // if (data?.sections) {
    //     data.sections = await Promise.all(
    //         data.sections.map(async (section) => {
    //             if (section.components) {
    //                 // Iterate through components to find image blocks
    //                 // console.log(section.components);
    //                 section.components = await Promise.all(
    //                     section.components.map(async (component) => {
    //                         const textImageGrid =
    //                             component._type === "textImageGrid";
    //                         if (!textImageGrid) return component;
    //                         // Process each row's image asynchronously
    //                         component.rows = await Promise.all(
    //                             component.rows.map(async (row) => {
    //                                 if (row.imageBlock?.image?.asset) {
    //                                     const blurUrl = urlFor(
    //                                         row.imageBlock.image.asset
    //                                     );
    //                                     const response = await fetch(blurUrl);
    //                                     const arrayBuffer =
    //                                         await response.arrayBuffer();
    //                                     const buffer = Buffer.from(arrayBuffer);
    //                                     const { base64 } =
    //                                         await getPlaiceholder(buffer); // Await getPlaiceholder
    //                                     row.imageBlock.placeholder = base64;
    //                                 }
    //                                 return row;
    //                             })
    //                         );
    //                         return component;
    //                     })
    //                 );
    //             }
    //             return section;
    //         })
    //     );
    // }

    // return data;
    // return await client.fetch(query, params);

    // Process all images within each component recursively
    if (data?.sections) {
        data.sections = await Promise.all(
            data.sections.map(async (section) => {
                if (section.components) {
                    section.components = await Promise.all(
                        section.components.map(async (component) => {
                            await processImagesRecursively(component);
                            return component;
                        })
                    );
                }
                return section;
            })
        );
    }
    // if (data?.sections) {
    //     data?.sections = await Promise.all(
    //         data.sections.map(async (section) => {
    //             if (section.components) {
    //                 await Promise.all(
    //                     section.components.map(async (component) => {
    //                         await processImagesRecursively(component);
    //                     })
    //                 );
    //             }
    //         })
    //     );
    // }

    return data;
};

export const fetchProducts = async () => {
    const query = `
        *[_type == "products"]{
            ...,
        }
    `;

    return await client.fetch(query);
};

export const fetchProductData = async (slug) => {
    const query = `
        *[_type == "products" && slug.current == $slug]{
            ...,
            "slug": slug.current,
        }[0]
    `;

    const params = { slug };

    return await client.fetch(query, params);
};

export const fetchNavbarColor = async (slug) => {
    const query = `
        *[_type == "page" && slug.current == $slug] {
            navbar_color
        }[0]
    `;

    const params = { slug };
    return await client.fetch(query, params);
};
