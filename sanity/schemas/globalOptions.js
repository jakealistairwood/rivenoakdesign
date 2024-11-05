export const globalOptions = {
    name: "globalOptions",
    type: "document",
    title: "Global Options",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "contactDetails",
            type: "object",
            title: "Contact Details",
            fields: [
                {
                    name: "address",
                    type: "object",
                    title: "Address",
                    fields: [
                        {
                            name: "addressLine1",
                            type: "string",
                            title: "Address Line 1",
                        },
                        {
                            name: "addressLine2",
                            type: "string",
                            title: "Address Line 2",
                        },
                        {
                            name: "city",
                            type: "string",
                            title: "City",
                        },
                        {
                            name: "county",
                            type: "string",
                            title: "County",
                        },
                        {
                            name: "postcode",
                            type: "string",
                            title: "Postcode",
                        },
                    ],
                },
                {
                    name: "phone",
                    type: "string",
                    title: "Phone",
                },
                {
                    name: "email",
                    type: "string",
                    title: "Email",
                },
            ],
        },
        {
            name: "socials",
            type: "array",
            title: "Socials",
            of: [
                {
                    name: "social",
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            type: "string",
                            title: "Title",
                        },
                        {
                            name: "icon",
                            type: "image",
                            title: "Icon",
                        },
                        {
                            name: "url",
                            type: "string",
                            title: "URL",
                        },
                    ],
                },
            ],
        },
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
        {
            name: "faq_block",
            type: "object",
            title: "FAQ Block",
            fields: [
                {
                    name: "sectionHeader",
                    type: "sectionHeader",
                },
            ],
        },
    ],
};
