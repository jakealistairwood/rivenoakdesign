import { defineType } from "sanity";

export const sectionHeader = defineType({
    name: "sectionHeader",
    title: "Section Header",
    type: "object",
    groups: [
        { name: "content", title: "Content" },
        { name: "options", title: "Options" },
    ],
    fields: [
        {
            name: "subheading",
            type: "string",
            title: "Subheading",
            group: "content",
        },
        {
            name: "heading",
            type: "string",
            title: "Heading",
            group: "content",
        },
        {
            name: "description",
            type: "text",
            title: "Description",
            group: "content",
        },
        {
            name: "max_width",
            type: "object",
            title: "Max Width (in pixels)",
            group: "options",
            fields: [
                {
                    name: "container",
                    type: "number",
                    title: "Container Width",
                    description:
                        "Enter the maximum width of the content area in pixels. If left blank, the content will take up the full width of the container.",
                    validation: (Rule) => Rule.min(1),
                },
                {
                    name: "heading",
                    type: "number",
                    title: "Heading Width",
                    description:
                        "Enter the maximum width of the heading text in pixels. If left blank, the heading will take up the full width of the container.",
                    validation: (Rule) => Rule.min(1),
                },
                {
                    name: "description",
                    type: "number",
                    title: "Description Width",
                    description:
                        "Enter the maximum width of the description text in pixels. If left blank, the description will take up the full width of the container.",
                    validation: (Rule) => Rule.min(1),
                },
            ],
        },
        {
            name: "add_container",
            type: "boolean",
            title: "Add Container?",
            group: "options",
            initialValue: false,
        },
        {
            name: "center",
            type: "boolean",
            title: "Center Text",
            group: "options",
        },
        {
            name: "make_row",
            type: "boolean",
            title: "Make Row?",
            group: "options",
            initialValue: false,
        },
        {
            name: "align_center",
            type: "boolean",
            title: "Center Align Vertically?",
            group: "options",
            initialValue: false,
        },
    ],
});
