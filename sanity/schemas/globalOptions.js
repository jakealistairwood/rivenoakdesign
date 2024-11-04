export const globalOptions = {
    name: "globalOptions",
    type: "document",
    title: "Global Options",
    fields: [
        {
            name: "cta_block",
            type: "object",
            title: "CTA Block",
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
                {
                    name: "links",
                    type: "array",
                    title: "Links",
                    of: [
                        {
                            name: "link",
                            type: "object",
                            fields: [
                                {
                                    name: "url",
                                    type: "string",
                                    title: "URL",
                                },
                                {
                                    name: "label",
                                    type: "string",
                                    title: "Label",
                                },
                                {
                                    name: "open_in_new_tab",
                                    type: "boolean",
                                    title: "Open In New Tab?",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
