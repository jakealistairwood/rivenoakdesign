import React, { memo } from "react";
import ComponentRenderer from "./ComponentRenderer";
import { getBackgroundColor, getContainerTextColor } from "@/utils/colors";

const Section = memo((props) => {
    const { components = [], backgroundColor, paddingTop, paddingBottom, addDivider = false } = props;

    const getPaddingTop = {
        none: "pt-0",
        normal: "pt-[120px]",
    }

    const getPaddingBottom = {
        none: "pb-0",
        normal: "pb-[120px]",
    }

    let containerClasses = [
        getBackgroundColor[backgroundColor] || "bg-white",
        getContainerTextColor[backgroundColor] || "text-black",
        getPaddingTop[paddingTop],
        getPaddingBottom[paddingBottom],
        addDivider && "border-b border-[#D1D1D1]",
    ];

    return (
        <section className={`${containerClasses.join(" ")}`}>
            <div className="container">
                <ComponentRenderer components={components} backgroundColor={backgroundColor} />
            </div>
        </section>
    )
})

export default Section;