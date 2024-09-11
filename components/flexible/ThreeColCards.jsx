import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ThreeColCards = ({ cards }) => {
    const renderCards = cards && cards?.length > 0;
    return renderCards && (
        <div className="grid grid-cols-3 gap-10 mt-[100px]">
            {cards?.map((card, i) => (
                <div key={`three-col-card-${i}`} className="bg-[#F8F8F8] py-[50px] px-[45px] min-h-[500px] flex flex-col justify-between">
                    <div className="w-[54px] h-[54px] flex items-center justify-center aspect-[1/1] bg-[#242424] relative rounded-full">
                        <Image className="object-contain" src={urlFor(card?.icon?.asset)} alt="" height={24} width={24} />
                    </div>
                    <div className="flex flex-col mt-auto gap-y-6">
                        {card?.heading && <h3 className="text-[1.75rem] leading-[1.1] font-medium">{card?.heading}</h3>}
                        {card?.description && <p className="text-lg leading-[1.33] opacity-80">{card?.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ThreeColCards;