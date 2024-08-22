export const stackedCards = {
    name: "stackedCards",
    type: "object",
    title: "Stacked Cards",
    fields: [
        {
            name: "cards",
            type: "array",
            title: "Cards",
            of: [
                {
                    name: "stacked_card",
                    type: "object",
                    fields: [
                        {
                            name: "icon",
                            type: "image",
                            title: "Icon",
                            fields: [
                                {
                                    name: "alt_text",
                                    type: "string",
                                    title: "Alt Text",
                                },
                            ],
                        },
                        {
                            name: "heading",
                            type: "string",
                            title: "Heading",
                        },
                        {
                            name: "description",
                            type: "text",
                            title: "Description",
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
