import { client } from "../lib/client";

export const fetchPageData = async (slug) => {
    const query = `
        *[_type == "page" && slug.current == $slug]{
            _id,
            "slug": slug.current,
            sections[]{
                ...,
            }
        }[0]
    `;
    const params = { slug };
    return await client.fetch(query, params);
};
