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
                            { value: "white", title: "White" },
                            { value: "carbon-grey", title: "Carbon Grey" },
                            { value: "slate-grey", title: "Slate Grey" },
                            { value: "forest-green", title: "Forest Green" },
                        ],
                    },
                    group: "options",
                },
                {
                    name: "paddingTop",
                    title: "Padding Top",
                    type: "string",
                    options: {
                        list: [
                            { value: "none", title: "None" },
                            { value: "normal", title: "Normal" },
                        ],
                    },
                    initialValue: "none",
                    group: "options",
                },
                {
                    name: "paddingBottom",
                    title: "Padding Bottom",
                    type: "string",
                    options: {
                        list: [
                            { value: "none", title: "None" },
                            { value: "normal", title: "Normal" },
                        ],
                    },
                    initialValue: "none",
                    group: "options",
                },
                {
                    name: "addDivider",
                    title: "Add Divider",
                    type: "boolean",
                    initialValue: false,
                    group: "options",
                },
                {
                    name: "components",
                    title: "Components",
                    type: "array",
                    of: [
                        { name: "masthead", type: "masthead" },
                        { name: "sectionHeader", type: "sectionHeader" },
                        { name: "productsCarousel", type: "productsCarousel" },
                        { name: "tabbedSlider", type: "tabbedSlider" },
                        { name: "timedSlider", type: "timedSlider" },
                        { name: "stackedCards", type: "stackedCards" },
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
                                {
                                    name: "flexible",
                                    title: "Flexible",
                                    of: [
                                        "productsCarousel",
                                        "tabbedSlider",
                                        "timedSlider",
                                    ],
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
