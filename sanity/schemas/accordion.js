export const accordion = {
    name: "accordion",
    title: "Accordion",
    type: "object",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "accordion_items",
            type: "array",
            title: "Accordion Items",
            of: [
                {
                    name: "accordion_item",
                    type: "object",
                    fields: [
                        {
                            name: "heading",
                            type: "string",
                            title: "Heading",
                        },
                        {
                            name: "content",
                            type: "text",
                            title: "Content",
                        },
                    ],
                },
            ],
        },
    ],
};
