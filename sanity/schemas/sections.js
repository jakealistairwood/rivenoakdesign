import { defineType } from "sanity";

export const sections = defineType({
    name: "sections",
    type: "array",
    title: "Sections",
    of: [
        {
            title: "Section",
            type: "object",
            groups: [
                { name: "content", title: "Content" },
                { name: "options", title: "Options" },
            ],
            fields: [
                {
                    name: "title",
                    type: "string",
                    title: "Title",
                    group: "content",
                },
                {
                    name: "backgroundColor",
                    title: "Background Color",
                    type: "string",
                    options: {
                        list: [
                            { name: "white", title: "White" },
                            { name: "slateGrey", title: "Slate Grey" },
                        ],
                    },
                    group: "options",
                },
                {
                    name: "components",
                    title: "Components",
                    type: "array",
                    of: [
                        { name: "masthead", type: "masthead" },
                        { name: "sectionHeader", type: "sectionHeader" },
                    ],
                    options: {
                        insertMenu: {
                            groups: [
                                {
                                    name: "mastheads",
                                    title: "Mastheads",
                                    of: ["masthead"],
                                },
                                {
                                    name: "elements",
                                    title: "Elements",
                                    of: ["sectionHeader"], // Add other component types if needed
                                },
                            ],
                            views: [
                                { name: "list" },
                                {
                                    name: "grid",
                                    previewImageUrl: (schemaTypeName) => {
                                        return `/static/preview-${schemaTypeName}.png`;
                                    },
                                },
                            ],
                        },
                    },
                    group: "content",
                },
            ],
        },
    ],
});
