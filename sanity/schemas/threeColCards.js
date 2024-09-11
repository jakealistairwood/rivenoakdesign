export const threeColCards = {
    name: "threeColCards",
    title: "Three Column Cards",
    type: "object",
    fields: [
        {
            name: "cards",
            type: "array",
            of: [
                {
                    name: "card",
                    title: "Card",
                    type: "object",
                    fields: [
                        {
                            name: "icon",
                            type: "image",
                            title: "Icon",
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
                    ],
                },
            ],
        },
    ],
};
