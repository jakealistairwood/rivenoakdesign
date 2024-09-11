export const twoColTextAsset = {
    name: "twoColTextAsset",
    title: "Two Col Text Asset",
    type: "object",
    groups: [
        { name: "content", title: "Content" },
        { name: "options", title: "Options" },
    ],
    fields: [
        {
            name: "content",
            type: "object",
            title: "Content",
            group: "content",
            fields: [
                {
                    name: "sectionHeader",
                    type: "sectionHeader",
                },
            ],
        },
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
            name: "background_color",
            title: "Background Color",
            type: "string",
            options: {
                list: [
                    { value: "default", title: "Default (White)" },
                    { value: "stone", title: "Stone" },
                    { value: "pine", title: "pine" },
                ],
            },
            initialValue: "default",
            group: "options",
        },
        {
            name: "reverse_direction",
            title: "Reverse Direction?",
            type: "boolean",
            initialValue: false,
            group: "options",
        },
    ],
};
