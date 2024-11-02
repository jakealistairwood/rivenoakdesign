const columnWidth = [
    {
        value: "span-1",
        title: "1",
    },
    {
        value: "span-2",
        title: "2",
    },
    {
        value: "span-3",
        title: "3",
    },
    {
        value: "span-4",
        title: "4",
    },
    {
        value: "span-5",
        title: "5",
    },
    {
        value: "span-6",
        title: "6",
    },
    {
        value: "span-7",
        title: "7",
    },
    {
        value: "span-8",
        title: "8",
    },
    {
        value: "span-9",
        title: "9",
    },
    {
        value: "span-10",
        title: "10",
    },
    {
        value: "span-11",
        title: "11",
    },
    {
        value: "span-12",
        title: "12",
    },
];

export const textImageGrid = {
    name: "textImageGrid",
    type: "object",
    title: "Text Image Grid",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "rows",
            type: "array",
            of: [
                {
                    name: "row",
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            type: "string",
                            title: "Title",
                        },
                        {
                            name: "backgroundColor",
                            type: "string",
                            title: "Background Color",
                            options: {
                                list: [
                                    { value: "white", title: "White" },
                                    {
                                        value: "carbon-grey",
                                        title: "Carbon Grey",
                                    },
                                    {
                                        value: "slate-grey",
                                        title: "Slate Grey",
                                    },
                                    {
                                        value: "forest-green",
                                        title: "Forest Green",
                                    },
                                    { value: "walnut", title: "Walnut" },
                                    {
                                        value: "slate-green",
                                        title: "Slate Green",
                                    },
                                    { value: "cinnamon", title: "Cinnamon" },
                                    { value: "ecru", title: "Ecru" },
                                    {
                                        value: "taupe-brown",
                                        title: "Taupe Brown",
                                    },
                                ],
                            },
                        },
                        {
                            name: "reverse_direction",
                            type: "boolean",
                            title: "Reverse Direction?",
                            initialValue: false,
                        },
                        {
                            name: "imageBlock",
                            type: "object",
                            title: "Image Block",
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
                                },
                                {
                                    name: "columnWidth",
                                    type: "string",
                                    title: "Column Width",
                                    options: {
                                        list: columnWidth,
                                    },
                                },
                            ],
                        },
                        {
                            name: "contentBlock",
                            type: "object",
                            title: "Content Block",
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
                                    name: "columnWidth",
                                    type: "string",
                                    title: "Column Width",
                                    options: {
                                        list: columnWidth,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
