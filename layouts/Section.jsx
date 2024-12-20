import React, { memo } from "react";
import ComponentRenderer from "./ComponentRenderer";
import { getBackgroundColor, getContainerTextColor } from "@/utils/colors";

const Section = memo((props) => {
    const { components = [], backgroundColor, paddingTop, paddingBottom, addDivider = false, remove_container = false, overflow_hidden = false, contactDetails } = props;

    const getPaddingTop = {
        none: "pt-0",
        normal: "pt-20 md:pt-[120px]",
    }

    const getPaddingBottom = {
        none: "pb-0",
        normal: "pb-20 md:pb-[120px]",
    }

    let containerClasses = [
        getBackgroundColor[backgroundColor] || "bg-white",
        getContainerTextColor[backgroundColor] || "text-black",
        // getPaddingTop[paddingTop],
        // getPaddingBottom[paddingBottom],
        // addDivider && "border-b border-[#D1D1D1]",
    ];

    let paddingClasses = [
        getPaddingTop[paddingTop],
        !addDivider ? getPaddingBottom[paddingBottom] : null,
    ];

    return (
        <section className={`relative ${containerClasses.join(" ")} ${overflow_hidden ? "overflow-hidden" : ""}`}>
            <div className={`${remove_container ? "" : "container"} ${paddingClasses.join(" ")}`}>
                <ComponentRenderer components={components} backgroundColor={backgroundColor} contactDetails={contactDetails} />
                {addDivider && <div className={`${getPaddingTop[paddingTop]}`}>
                    <div className="h-[1px] w-full bg-[#D1D1D1]/50" />
                </div>}
            </div>
        </section>
    )
})

export default Section;