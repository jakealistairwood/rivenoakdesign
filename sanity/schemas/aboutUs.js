export const aboutUs = {
    name: "aboutUs",
    type: "object",
    title: "About Us",
    fields: [
        {
            name: "masthead",
            type: "object",
            title: "Masthead",
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
            ],
        },
        {
            name: "content",
            title: "Content",
            type: "object",
            fields: [
                {
                    name: "heading",
                    type: "text",
                    title: "Heading",
                },
                {
                    name: "body",
                    type: "array",
                    title: "Body",
                    of: [{ type: "block" }],
                },
            ],
        },
    ],
};
