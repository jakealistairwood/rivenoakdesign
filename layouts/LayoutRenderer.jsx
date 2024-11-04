"use client";

import Section from "./Section";

const LayoutRenderer = ({ page }) => {
    if (!page?.sections) return null;

    return page?.sections?.map((section, index) => <Section key={section?._key} {...section}/> )
}

export default LayoutRenderer;