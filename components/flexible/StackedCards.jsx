import React, { useRef } from "react";
import { checkPropertyExists } from "@/utils/helpers";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import { useTransform, useScroll, motion } from "framer-motion";

const StackedCards = ({ cards }) => {
    const hasCards = checkPropertyExists(cards);

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        hasCards && (
            <div ref={containerRef} className="relative mt-[100px]">
                {cards?.map((card, i) => {
                    const targetScale = 1 - (cards.length - i) * 0.05;
                    return (
                        <StackedCard key={`stacked-card-${card?._key}`} range={[i * .25, 1]} progress={scrollYProgress} targetScale={targetScale} {...card} index={i} />
                    )
                })}
            </div>
        )
    );
};

export default StackedCards;

const StackedCard = ({ icon, progress, range, targetScale, index, heading, description, image }) => {
    const cardContainerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardContainerRef,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={cardContainerRef}
            className="h-screen sticky top-[10%] flex items-center justify-center"
        >
            <motion.div style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} className={`bg-white max-h-[754px] text-black flex flex-col w-full aspect-[1539/754] relative origin-top p-8 rounded-2xl ${index !== 0 ? "shadow-xl" : ""}`}>
                <div className="flex gap-x-[110px] h-full">
                    <div className="flex flex-col justify-between pl-[70px] py-20">
                        <div className="flex flex-col gap-y-6">
                            <div className="bg-vibrant-green h-[54px] w-[54px] rounded-full aspect-[1/1] relative flex items-center justify-center">
                                <Image
                                    src={urlFor(icon?.asset)}
                                    alt=""
                                    width={20}
                                    height={30}
                                />
                            </div>
                            {checkPropertyExists(heading) && <h3 className="text-4xl">{heading}</h3>}
                        </div>
                        {checkPropertyExists(description) && <p className="text-black-60 text-xl tracking-wider leading-[1.5]" dangerouslySetInnerHTML={{ __html: description }} />}
                    </div>
                    {image?.asset && (
                        <div className="aspect-[761/697] max-w-[761px] w-full relative overflow-hidden rounded-lg">
                            <Image className="rounded-lg" src={urlFor(image?.asset)} alt={image?.alt_text || ""} fill objectFit="cover" />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
