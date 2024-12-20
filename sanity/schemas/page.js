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
        {
            name: "seo",
            title: "SEO",
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
            name: "overwrite_global_cta_url",
            type: "boolean",
            title: "Override Global CTA URL",
            group: "pageOptions",
            initialValue: false,
        },
        {
            name: "global_cta_url",
            type: "string",
            title: "Global CTA URL",
            hidden: ({ parent }) => !parent?.overwrite_global_cta_url,
            group: "pageOptions",
        },
        {
            name: "hide_faqs",
            type: "boolean",
            title: "Hide FAQs?",
            group: "pageOptions",
            initialValue: false,
        },
        {
            name: "seoData",
            type: "object",
            title: "SEO",
            group: "seo",
            fields: [
                {
                    name: "title",
                    type: "string",
                    title: "Title",
                },
                {
                    name: "description",
                    type: "text",
                    title: "Description",
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
            const { title, media } = selection;
            return {
                title: title ?? "Currently no title, set one inside this block",
                media: media ?? AddDocumentIcon,
            };
        },
    },
};
