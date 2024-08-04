export const sectionHeader = {
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
            name: "center",
            type: "boolean",
            title: "Center Text",
            group: "options",
        },
    ],
};
