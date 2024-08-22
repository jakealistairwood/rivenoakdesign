import { BasketIcon } from "@sanity/icons";

export const productsCarousel = {
    name: "productsCarousel",
    type: "object",
    title: "Products Carousel",
    fields: [
        {
            name: "sectionHeader",
            type: "sectionHeader",
        },
        {
            name: "products",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: {
                        type: "products",
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
        prepare(selection) {
            return {
                title: "Product Carousel",
                media: BasketIcon,
            };
        },
    },
};
