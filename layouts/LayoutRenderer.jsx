"use client";

import Section from "./Section";

const LayoutRenderer = ({ page, contactDetails }) => {
    if (!page?.sections) return null;

    return page?.sections?.map((section, index) => <Section key={section?._key} {...section} contactDetails={contactDetails} /> )
}

export default LayoutRenderer;