export const scrollableImage = {
    name: "scrollableImage",
    title: "Scrollable Image",
    type: "object",
    groups: [
        { name: "content", title: "Content" },
        { name: "options", title: "Options" },
    ],
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt_text",
                    type: "string",
                    title: "Alt Text",
                },
            ],
            group: "content",
        },
        {
            name: "image_max_width",
            type: "number",
            title: "Image Max Width",
            description: "Enter the maximum width of the image in pixels",
            group: "options",
        },
    ],
};
