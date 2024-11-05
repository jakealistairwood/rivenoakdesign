import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const getColSpan = {
    "span-1": "md:col-span-1",
    "span-2": "md:col-span-2",
    "span-3": "md:col-span-3",
    "span-4": "md:col-span-4",
    "span-5": "md:col-span-5",
    "span-6": "md:col-span-6",
    "span-7": "md:col-span-7",
    "span-8": "md:col-span-8",
    "span-9": "md:col-span-9",
    "span-10": "md:col-span-10",
    "span-11": "md:col-span-11",
    "span-12": "md:col-span-12",
};

const ImageGrid = ({ rows }) => {
    return (
        <div className="mt-12 md:mt-20">
            {rows?.map((row, i) => (
                <div key={`image-grid-row-${i}`} className="flex flex-col md:grid md:grid-cols-12 gap-4 min-h-[60vh]">
                    {row?.items?.map((item, i) => (
                        <div key={`image-grid-row-item-${i}`} className={`${getColSpan[item?.columnWidth]} min-h-[300px] md:min-w-[unset] w-full relative object-top md:object-center`}>
                            <Image src={urlFor(item?.image?.asset)} alt="" fill className="w-full h-full object-cover" placeholder={item?.image?.placeholder} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;