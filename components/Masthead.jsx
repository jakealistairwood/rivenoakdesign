import React, { useRef, useState, useEffect } from "react";
import { checkPropertyExists } from "@/utils/helpers";
import SplitType from "split-type";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Masthead = (props) => {
    const [imageAnimationsComplete, setImageAnimationsComplete] = useState(false);
    const { eyebrow = "", heading = "", subheading = "", images } = props;

    const { left_block = {}, right_block = {} } = images;

    const headingRef = useRef(null);
    const containerRef = useRef(null);

    const hasEyebrow = checkPropertyExists(eyebrow);
    const hasSubheading = checkPropertyExists(subheading);

    const isInView = useInView(containerRef, {
        amount: 0.2,
        once: false,
    })

    const imageOneAnimation = {
        initial: {
            scale: 0,
            opacity: 0,
            blur: "4px",
        },
        animate: (i) => ({
            scale: [0, 1.05, 1],
            opacity: 1,
            blur: "0px",
            transition: {
                delay: i * 0.4,
                duration: 1,
                ease: [0.215, 0.61, 0.355, 1]
            }
        })
    }

    const textMaskAnimation = {
        initial: {
            opacity: 1,
            y: "1em",
            clipPath: "polygon(-10% -100%, 110% -100%, 110% 0%, -10% 0%)",
        },
        animate: {
            opacity: 1,
            y: 0,
            clipPath: "polygon(-10% 0%, 110% 0%, 110% 110%, -10% 110%)",
            transition: {
                duration: 0.9,
                ease: [0.215, 0.61, 0.355, 1]
            },
        }
    }

    useEffect(() => {
        if (headingRef.current) {
          new SplitType(headingRef.current);
        }
      }, []);

    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.add("body--fixed");
        if (imageAnimationsComplete) {
            body.classList.remove("body--fixed");
        }
    }, [imageAnimationsComplete]);

    return (
        <header className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="max-w-[1115px] w-full mx-auto uppercase pt-20 relative" ref={containerRef}>
                {hasEyebrow && <motion.span variants={textMaskAnimation} initial="initial" animate={isInView ? "animate" : "initial"} className="block tracking-[0.41em] mb-10 relative overflow-hidden">{eyebrow}</motion.span>}
                <h1 className={`uppercase text-[8.25rem] leading-[0.83] font-heading font-black flex flex-col relative z-[2] ${isInView ? "text-mask-anim" : "text-mask"}`}>
                    <span className="relative" ref={headingRef}>
                        {heading}
                    </span>
                    <span className="sr-only">{heading}</span>
                </h1>
                {hasSubheading && <span className="block mt-10 text-base tracking-[0.41em] font-body font-normal">{subheading}</span>}
                <div className="absolute grid grid-cols-2 inset-0">
                    <div className="relative">
                        {left_block?.image_one && <motion.div variants={imageOneAnimation} initial="initial" animate="animate" className="absolute z-[1] top-10 -left-[40%] aspect-[370/176] w-full max-w-[370px]" custom={1}>
                            <div className="aspect-[370/176] relative">
                                <Image className="object-cover" src={urlFor(left_block?.image_one?.asset)} alt="" fill />
                            </div>
                        </motion.div>}
                        {left_block?.image_two && <motion.div className="absolute left-14 -top-20 w-full max-w-[190px] blur-sm grayscale" variants={imageOneAnimation} initial="initial" animate="animate" custom={2}>
                            <div className="aspect-[1/1] relative">
                                <Image src={urlFor(left_block?.image_two?.asset)} alt="" fill />
                            </div>
                        </motion.div>}
                    </div>
                    <div className="relative">
                        {right_block?.image_two && <motion.div variants={imageOneAnimation} initial="initial" animate="animate" onAnimationComplete={() => setImageAnimationsComplete(true)} className="max-w-[332px] w-full absolute -bottom-20 -right-[160px]" custom={2.8}>
                            <div className="aspect-[332/227] relative">
                                <Image src={urlFor(right_block?.image_two?.asset)} alt="" fill />
                            </div>    
                        </motion.div>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Masthead;