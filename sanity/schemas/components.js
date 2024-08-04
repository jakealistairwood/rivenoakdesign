import { defineType } from "sanity";

export const components = defineType({
    name: "components",
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
});
