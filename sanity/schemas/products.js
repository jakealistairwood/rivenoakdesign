export const products = {
    name: "products",
    type: "document",
    title: "Products",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "thumbnail",
            type: "image",
            title: "Thumbnail",
            fields: [
                {
                    name: "alt_text",
                    type: "string",
                    title: "Alt Text",
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: "add_featured_image",
            type: "boolean",
            title: "Add Featured Image",
        },
        {
            name: "featured_image",
            type: "image",
            title: "Featured Image",
            fields: [
                {
                    name: "alt_text",
                    type: "string",
                    title: "Alt Text",
                },
            ],
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => !parent?.add_featured_image,
        },
        {
            name: "excerpt",
            type: "text",
            title: "Excerpt",
        },
        {
            name: "description",
            type: "array",
            title: "Description",
            of: [{ type: "block" }],
        },
    ],
};
