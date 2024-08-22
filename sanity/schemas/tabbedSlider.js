export const tabbedSlider = {
    name: "tabbedSlider",
    type: "object",
    title: "Tabbed Slider",
    fields: [
        {
            name: "groups",
            type: "array",
            title: "Groups",
            of: [
                {
                    name: "group",
                    type: "object",
                    title: "Group",
                    fields: [
                        {
                            name: "tab_label",
                            type: "string",
                            title: "Tab Label",
                        },
                        {
                            name: "heading",
                            type: "string",
                            title: "Heading",
                        },
                        {
                            name: "content",
                            type: "array",
                            title: "Content",
                            of: [{ type: "block" }],
                        },
                        {
                            name: "image",
                            type: "image",
                            title: "Image",
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
                    ],
                },
            ],
        },
    ],
};
