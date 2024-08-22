import React from "react";
import { checkPropertyExists } from "@/utils/helpers";

const SectionHeader = ({ heading = "", subheading = "", description = "", center = false, backgroundColor }) => {
    const hasSubheading = checkPropertyExists(subheading);
    const hasDescription = checkPropertyExists(description);

    console.log(backgroundColor);

    return (
        <header className={`flex flex-col max-w-[520px] w-full ${center ? "items-center text-center w-fit mx-auto" : "items-start text-left"}`}>
            {hasSubheading && <strong className={`uppercase text-sm font-mono tracking-[0.14em] mb-3 font-medium ${backgroundColor === "forest-green" ? "text-white" : "text-black-60"}`}>{subheading}</strong>}
            <h2 className="font-neue font-normal tracking-[0.04em] leading-[1.1] text-[3rem]">{heading}</h2>
            {hasDescription && <p className="mt-12 text-black-60 tracking-[0.05em] leading-[1.5]" dangerouslySetInnerHTML={{ __html: description }} />}
        </header>
    )
}

export default SectionHeader;