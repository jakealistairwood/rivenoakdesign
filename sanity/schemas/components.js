import { defineType } from "sanity";

export const components = defineType({
    name: "components",
    type: "array",
    of: [
        { name: "masthead", type: "masthead" },
        { name: "sectionHeader", type: "sectionHeader" },
        { name: "productsCarousel", type: "productsCarousel" },
        { name: "twoColTextAsset", type: "twoColTextAsset" },
        { name: "scrollableImage", type: "scrollableImage" },
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
                        "twoColTextAsset",
                        "scrollableImage",
                    ], // Add other component types if needed
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
