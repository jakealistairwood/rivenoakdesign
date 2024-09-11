import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SectionHeader from "./SectionHeader";

const TwoColTextAsset = ({ content, image, background_color = "default", reverse_direction = false }) => {
    const renderColors = {
        default: "bg-white text-black",
        pine: "bg-[#2C2D2B] text-white",
        stone: "bg-[#F0F1EA] text-black",
    }
    return (
        <div className={`flex flex-col ${reverse_direction ? "md:flex-row-reverse" : "md:flex-row"} ${renderColors[background_color]}`}>
            <div className="w-1/2 flex items-center justify-center p-20">
                <SectionHeader {...content?.sectionHeader} />
            </div>
            <div className="w-1/2 aspect-[1/1] relative">
                <Image src={urlFor(image?.asset)} alt="" className="object-cover w-full h-full" fill />
            </div>
        </div>
    )
}

export default TwoColTextAsset;