export const masthead = {
    name: "masthead",
    type: "object",
    title: "Masthead",
    fields: [
        {
            name: "eyebrow",
            type: "string",
            title: "Eyebrow",
        },
        {
            name: "heading",
            type: "string",
            title: "Heading",
        },
        {
            name: "subheading",
            type: "string",
            title: "Subheading",
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
                    ],
                },
            ],
        },
        {
            name: "images",
            type: "object",
            title: "Images",
            fields: [
                {
                    name: "left_block",
                    type: "object",
                    title: "Left Block",
                    fields: [
                        {
                            name: "image_one",
                            type: "image",
                            title: "Image One",
                            fields: [
                                {
                                    name: "alt_text",
                                    type: "string",
                                    title: "Alt Text",
                                },
                                {
                                    name: "blur_image",
                                    type: "boolean",
                                    title: "Blur Image?",
                                },
                            ],
                        },
                        {
                            name: "image_two",
                            type: "image",
                            title: "Image Two",
                            fields: [
                                {
                                    name: "alt_text",
                                    type: "string",
                                    title: "Alt Text",
                                },
                                {
                                    name: "blur_image",
                                    type: "boolean",
                                    title: "Blur Image?",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "right_block",
                    type: "object",
                    title: "Right Block",
                    fields: [
                        {
                            name: "image_one",
                            type: "image",
                            title: "Image One",
                            fields: [
                                {
                                    name: "alt_text",
                                    type: "string",
                                    title: "Alt Text",
                                },
                                {
                                    name: "blur_image",
                                    type: "boolean",
                                    title: "Blur Image?",
                                },
                            ],
                        },
                        {
                            name: "image_two",
                            type: "image",
                            title: "Image Two",
                            fields: [
                                {
                                    name: "alt_text",
                                    type: "string",
                                    title: "Alt Text",
                                },
                                {
                                    name: "blur_image",
                                    type: "boolean",
                                    title: "Blur Image?",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
