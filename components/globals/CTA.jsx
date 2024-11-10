"use client"

import React, { useState } from "react";
import { checkPropertyExists } from "@/utils/helpers";
import Link from "next/link";
import AnimatedLink from "../animations/AnimatedLink";

const CTA = ({ heading = "", description = "", links, overrideCTAUrl, overwrittenUrl = "" }) => {
    const renderOverwrittenURL = overrideCTAUrl && checkPropertyExists(overwrittenUrl);
    const renderedURL = renderOverwrittenURL ? overwrittenUrl : "/contact";
    return (
        <section className="md:pt-[2rem] pb-20 md:pb-[10rem]">
            <div className="container">
                <div className="flex flex-col items-center text-center bg-slate-green text-white py-20 px-6 rounded-[3px]">
                    {checkPropertyExists(heading) && (
                        <div className="flex flex-col gap-y-8 max-w-[700px] mx-auto w-full">
                            <h2 className="font-serif ~text-[3rem]/[4rem] leading-[100%]">{heading}</h2>
                            {checkPropertyExists(description) && <p dangerouslySetInnerHTML={{ __html: description }} />}
                        </div>
                    )}
                    <div className="mt-8 flex w-fit mx-auto">
                        <PrimaryButton label={links[0].label} classNames="bg-[#E5E0CE] text-walnut w-fit relative" url={renderedURL} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA;


const PrimaryButton = ({ label, classNames = "", url }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <Link 
            className={`${classNames} px-[30px] py-5 rounded-md font-medium text-sm w-fit`} 
            href={url}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            <AnimatedLink hovered={hovered} label={label} />
        </Link>
    )
}