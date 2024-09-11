import React from "react";
import { checkPropertyExists } from "@/utils/helpers";

const SectionHeader = ({ heading = "", subheading = "", description = "", add_container = false, center = false, make_row = false, align_center = false, backgroundColor, max_width }) => {
    const hasSubheading = checkPropertyExists(subheading);
    const hasDescription = checkPropertyExists(description);

    return (
        <div className={`section-header ${add_container ? "container" : ""}`}>
            <div className={`section-header flex ${make_row ? "flex-row justify-between" : "flex-col"} ${align_center ? "items-center" : "items-start"} w-full ${center ? "text-center w-fit mx-auto" : "text-left"}`} style={{
                maxWidth: max_width?.container ? `${max_width?.container}px` : null,
            }}>
                <div className="flex flex-col w-full" style={{
                    maxWidth: max_width?.heading ? `${max_width?.heading}px` : null
                }}>
                    {hasSubheading && <strong className="uppercase text-sm font-inter tracking-[0.14em] mb-3 font-normal">{subheading}</strong>}
                    <header>
                        <h2 className="font-inter font-regular -tracking-[0.02em] leading-[1] text-[4rem]" dangerouslySetInnerHTML={{ __html: heading }} />
                    </header>
                </div>
                {hasDescription && <p className={`font-inter ${make_row ? "mt-0" : "mt-12"} opacity-80 tracking-[0.05em] leading-[1.4] text-xl`} dangerouslySetInnerHTML={{ __html: description }} style={{
                    maxWidth: max_width?.description? `${max_width?.description}px` : null,
                }} />}
            </div>
        </div>
    )
}

export default SectionHeader;