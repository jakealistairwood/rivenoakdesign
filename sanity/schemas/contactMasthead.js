export const contactMasthead = {
    name: "contactMasthead",
    type: "object",
    title: "Contact Masthead",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
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
            name: "link",
            type: "object",
            title: "Link",
            fields: [
                {
                    name: "label",
                    type: "string",
                    title: "Label",
                },
                {
                    name: "url",
                    type: "string",
                    title: "URL",
                },
            ],
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
        },
        {
            name: "form",
            type: "object",
            title: "Form",
            fields: [
                {
                    name: "id",
                    type: "string",
                    title: "ID",
                },
                {
                    name: "confirmation_message",
                    type: "object",
                    title: "Confirmation Message",
                    fields: [
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
