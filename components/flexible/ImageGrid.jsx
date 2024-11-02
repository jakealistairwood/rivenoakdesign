import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const getColSpan = {
    "span-1": "col-span-1",
    "span-2": "col-span-2",
    "span-3": "col-span-3",
    "span-4": "col-span-4",
    "span-5": "col-span-5",
    "span-6": "col-span-6",
    "span-7": "col-span-7",
    "span-8": "col-span-8",
    "span-9": "col-span-9",
    "span-10": "col-span-10",
    "span-11": "col-span-11",
    "span-12": "col-span-12",
};

const ImageGrid = ({ rows }) => {
    return (
        <div className="mt-20">
            {rows?.map((row, i) => (
                <div key={`image-grid-row-${i}`} className="grid grid-cols-12 gap-4 min-h-[70vh]">
                    {row?.items?.map((item, i) => (
                        <div key={`image-grid-row-item-${i}`} className={`${getColSpan[item?.columnWidth]} relative`}>
                            <Image src={urlFor(item?.image?.asset)} alt="" fill className="w-full h-full object-cover" placeholder={item?.image?.placeholder} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;