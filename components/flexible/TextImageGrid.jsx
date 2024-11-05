import React from "react";
import { getBackgroundColor, getContainerTextColor } from "@/utils/colors";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { checkPropertyExists } from "@/utils/helpers";
// import getBase64 from "@/utils/getBase64";
// import { getPlaiceholder } from "plaiceholder";

const TextImageGrid = ({ rows }) => {
    const hasRows = checkPropertyExists(rows);
    return hasRows && (
        <div className="flex flex-col mt-12 md:mt-[120px] gap-y-5">
            {rows?.map((row, i) => (
                <TextImageRow key={`row-${row?._key}`} {...row} index={i} />
            ))}
        </div>
    )
}

export default TextImageGrid;

const TextImageRow = ({ backgroundColor, imageBlock, contentBlock, reverse_direction = false, index }) => {
    const imageBlurUrl = urlFor(imageBlock?.image?.asset);

    // const getBase64 = async (src) => {
    //     const buffer = await fetch(src).then( async (res) => {
    //         return Buffer.from(await res.arrayBuffer());
    //     });

    //     return buffer;
    // }

    // const base64Blur = getBase64(imageBlurUrl);
    
    // console.log(base64Blur);
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {imageBlock?.image && (
                <div className="md:col-span-4 relative min-h-[535px]">
                    <Image src={urlFor(imageBlock?.image?.asset)} alt="" fill className="w-full object-cover" />
                </div>
            )}
            <div className={`md:col-span-8 ${reverse_direction ? "md:-order-1" : "md:order-1"} flex flex-col gap-y-20 justify-between p-8 md:p-16 ${getBackgroundColor[backgroundColor]} ${getContainerTextColor[backgroundColor]}`}>
                <span className="text-[2rem] md:text-[7.5rem] leading-[80%] md:self-end">0{index + 1}</span>
                {checkPropertyExists(contentBlock?.heading) && (
                    <div className="flex flex-col gap-y-6">
                        <h3 className="font-serif ~text-[2.4rem]/[4rem] leading-[100%]" dangerouslySetInnerHTML={{ __html: contentBlock?.heading}} />
                        {checkPropertyExists(contentBlock?.description) && <p className="~text-[1rem]/[1.25rem]" dangerouslySetInnerHTML={{ __html: contentBlock?.description}} />}
                    </div>
                )}
            </div>
        </div>
    )
}