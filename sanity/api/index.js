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
            },
            hide_global_cta,
            hide_faqs,
        }[0]
    `;
    const params = { slug };
    const data = await client.fetch(query, params);

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
            thumbnail{
                ...,
                "blurURL": asset->metadata.lqip
            },
            gallery[]{
                ...,
                "blurURL": asset->metadata.lqip
            }
        }[0]
    `;

    const params = { slug };

    const data = await client.fetch(query, params);
    return data;
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

export const fetchGlobalOptions = async () => {
    const query = `
        *[_type == "globalOptions"] {
            ...
        }[0]
    `;

    return await client.fetch(query);
};

export const fetchFAQs = async () => {
    const query = `
    *[_type == "faqs"]{
        ...,
        _id,
        _type,
        question,
        answer
    }
    `;

    return await client.fetch(query);
};

export const fetchBasePages = async () => {
    const query = `
        *[_type == "page"]{
            _id,
            title,
            "slug": slug.current
        }
    `;

    return await client.fetch(query);
};

export const fetchProductPages = async () => {
    const query = `
        *[_type == "products"]{
            _id,
            title,
            "slug": slug.current
        }
    `;

    return await client.fetch(query);
};

export const fetchPageSEOData = async (slug) => {
    const query = `
        *[_type == "page" && slug.current == $slug]{
            seoData,
        }[0]
    `;
    const params = { slug };

    return await client.fetch(query, params);
};
