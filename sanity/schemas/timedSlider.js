export const timedSlider = {
    name: "timedSlider",
    type: "object",
    title: "Timed Slider",
    fields: [
        {
            name: "slides",
            type: "array",
            title: "Slides",
            of: [
                {
                    name: "slide_group",
                    type: "object",
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
                            name: "image",
                            type: "image",
                            title: "Image",
                            fields: [
                                {
                                    name: "alt_text",
                                    type: "string",
                                    title: "Alt Text",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
