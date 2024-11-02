export const imageGrid = {
    name: "imageGrid",
    type: "object",
    title: "Image Grid",
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
                            name: "items",
                            type: "array",
                            of: [
                                {
                                    name: "item",
                                    type: "object",
                                    title: "Row Item",
                                    fields: [
                                        {
                                            name: "image",
                                            type: "image",
                                            title: "Image",
                                            options: {
                                                hotspot: true,
                                            },
                                        },
                                        {
                                            name: "columnWidth",
                                            type: "string",
                                            title: "Column Width",
                                            description:
                                                "Determines the column width in a 12 column grid (please make sure this adds up to 12 across each row",
                                            options: {
                                                list: [
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
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
