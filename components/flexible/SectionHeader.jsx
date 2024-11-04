import React, { useEffect, useRef } from "react";
import { checkPropertyExists } from "@/utils/helpers";
import { getSectionHeaderSubtitleBGColor, getContainerTextColor } from "@/utils/colors";
import { useInView } from "framer-motion";
import { SplitText } from "@/utils/splitText";
import Link from "next/link";

const SectionHeader = ({ heading = "", subheading = "", description = "", add_container = false, center = false, make_row = false, align_center = false, backgroundColor, max_width }) => {
    const hasSubheading = checkPropertyExists(subheading);
    const hasDescription = checkPropertyExists(description);

    const headingRef = useRef(null);

    const headingInView = useInView(headingRef, {
        amount: 0.1,
    });

    return (
        <div className={`section-header ${add_container ? "container" : ""}`}>
            <div className={`section-header flex ${make_row ? "flex-row justify-between" : "flex-col"} ${align_center ? "items-center" : "items-start"} w-full ${center ? "text-center w-fit mx-auto" : "text-left"}`} style={{
                maxWidth: max_width?.container ? `${max_width?.container}px` : null,
            }}>
                <div className="flex flex-col w-full" style={{
                    maxWidth: max_width?.heading ? `${max_width?.heading}px` : null
                }}>
                    {hasSubheading && <strong className={`${getSectionHeaderSubtitleBGColor[backgroundColor] || "bg-[#0000000d]"} w-fit mx-auto uppercase text-sm font-mono tracking-[0.14em] px-[10px] py-1 mb-6 font-normal`}>{subheading}</strong>}
                    <header>
                        {/* <h2 ref={headingRef} className={`section-header__h2 ${headingInView ? "anim" : ""} font-inter font-regular -tracking-[0.02em] leading-[1] text-[4rem]`} dangerouslySetInnerHTML={{ __html: heading }} /> */}
                        {/* <h2 className="section-header__h2 font-inter font-regular -tracking-[0.02em] leading-[1] text-[4rem]">
                            {heading.split("").join(" ")}
                        </h2> */}
                        <h2 className={`section-header__h2 ${headingInView ? "anim" : ""} font-serif font-regular -tracking-[0.02em] leading-[1] ~text-[3rem]/[5rem]`}>
                            <SplitText text={heading} />
                        </h2>
                    </header>
                </div>
                {hasDescription && <p className={`font-inter ${make_row ? "mt-0" : "mt-12"} text-black-80 tracking-[0.05em] leading-[1.4] text-md`} dangerouslySetInnerHTML={{ __html: description }} style={{
                    maxWidth: max_width?.description? `${max_width?.description}px` : null,
                }} />}
            </div>
        </div>
    )
}

export default SectionHeader;