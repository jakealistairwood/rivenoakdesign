import { AddDocumentIcon } from "@sanity/icons";

export const page = {
    name: "page",
    title: "Page",
    type: "document",
    groups: [
        {
            name: "config",
            title: "Config",
        },
        {
            name: "content",
            title: "Content",
        },
        {
            name: "pageOptions",
            title: "Page Options",
        },
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            group: "config",
        },
        {
            name: "slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
            },
            group: "config",
        },
        {
            name: "sections",
            type: "sections",
            group: "content",
        },
        {
            name: "navbar_color",
            type: "string",
            title: "Navbar Color",
            options: {
                list: [
                    { value: "default", title: "Default" },
                    { value: "white", title: "White" },
                ],
            },
            initialValue: "default",
            group: "pageOptions",
        },
        {
            name: "hide_global_cta",
            type: "boolean",
            title: "Hide Global CTA?",
            group: "pageOptions",
            initialValue: false,
        },
        {
            name: "hide_faqs",
            type: "boolean",
            title: "Hide FAQs?",
            group: "pageOptions",
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
        prepare(selection) {
            const { title, media } = selection;
            return {
                title: title ?? "Currently no title, set one inside this block",
                media: media ?? AddDocumentIcon,
            };
        },
    },
};
