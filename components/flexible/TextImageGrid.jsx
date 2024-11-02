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
        <div className="flex flex-col mt-[120px] gap-y-5">
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
        <div className="grid grid-cols-12 gap-5">
            {imageBlock?.image && (
                <div className="col-span-4 relative min-h-[535px]">
                    <Image src={urlFor(imageBlock?.image?.asset)} alt="" fill className="w-full object-cover" />
                </div>
            )}
            <div className={`col-span-8 ${reverse_direction ? "-order-1" : "order-1"} flex flex-col justify-between p-16 ${getBackgroundColor[backgroundColor]} ${getContainerTextColor[backgroundColor]}`}>
                <span className="text-[7.5rem] leading-[80%] self-end">0{index + 1}</span>
                {checkPropertyExists(contentBlock?.heading) && (
                    <div className="flex flex-col gap-y-6">
                        <h3 className="font-serif text-[4rem]" dangerouslySetInnerHTML={{ __html: contentBlock?.heading}} />
                        {checkPropertyExists(contentBlock?.description) && <p className="text-[1.25rem]" dangerouslySetInnerHTML={{ __html: contentBlock?.description}} />}
                    </div>
                )}
            </div>
        </div>
    )
}