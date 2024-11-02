import React, { useRef, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useInView, motion } from "framer-motion";

const cardContainerAnimation = {
    initial: {
        y: 100,
        scale: 0.2,
        filter: "blur(20px)",
    },
    animate: (i) => ({
        y: 0,
        scale: [0.5, 1],
        filter: "blur(0px)",
        transition: {
            delay: i * 0.05,
            duration: 0.4,
        },
    }),
};

// Animation for child elements (icon, heading, description) with staggerChildren
const childElementContainerAnimation = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Stagger child elements by 0.15s
        },
    },
};

const childElementAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3, // Adjust timing as necessary
            ease: "easeInOut",
        },
    },
};

const ThreeColCards = ({ cards }) => {
    const containerRef = useRef(null);
    const renderCards = cards && cards?.length > 0;

    const isInView = useInView(containerRef, {
        amount: 0.2,
        once: true,
    });

    return (
        renderCards && (
            <div
                ref={containerRef}
                className="grid grid-cols-3 gap-10 mt-[100px]"
            >
                {cards?.map((card, i) => (
                    <Card inView={isInView} key={`three-col-card-${i}`} {...card} index={i} />
                ))}
            </div>
        )
    );
};

export default ThreeColCards;

const Card = ({ inView, index, icon, heading, description }) => {
    const [isCardAnimationComplete, setIsCardAnimationComplete] = useState(false);
    return (
        <motion.div
            variants={cardContainerAnimation}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            custom={index}
            className="bg-[#F8F8F8] py-[50px] px-[45px] min-h-[450px] flex flex-col justify-between origin-bottom-left"
            onAnimationComplete={() => setIsCardAnimationComplete(true)} // Trigger child animation when parent animation completes
        >
            <motion.div
                variants={childElementContainerAnimation}
                initial="initial"
                animate={isCardAnimationComplete ? "animate" : "initial"} // Trigger staggered animation
                className="flex flex-col h-full gap-y-6"
            >
                {/* Icon */}
                <motion.div
                    className="w-[54px] h-[54px] flex items-center justify-center aspect-[1/1] bg-[#242424] relative rounded-full max-h-[54px] mb-auto"
                    variants={childElementAnimation}
                >
                    <Image
                        className="object-contain"
                        src={urlFor(icon?.asset)}
                        alt=""
                        height={24}
                        width={24}
                    />
                </motion.div>

                {/* Heading */}
                {heading && (
                    <motion.h3
                        className="text-[1.75rem] leading-[1.1] font-medium"
                        variants={childElementAnimation}
                    >
                        {heading}
                    </motion.h3>
                )}

                {/* Description */}
                {description && (
                    <motion.p
                        className="font-inter opacity-80 tracking-[0.05em] leading-[1.4] text-md"
                        variants={childElementAnimation}
                    >
                        {description}
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
};
