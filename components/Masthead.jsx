import React, { useRef, useEffect } from "react";
import { checkPropertyExists } from "@/utils/helpers";
import SplitType from "split-type";
import { motion, useInView } from "framer-motion";

const Masthead = (props) => {
    console.log(props);
    const { eyebrow = "", heading = "", subheading = "" } = props;

    const eyebrowRef = useRef(null);
    const headingRef = useRef(null);

    const containerRef = useRef(null);

    const hasEyebrow = checkPropertyExists(eyebrow);
    const hasSubheading = checkPropertyExists(subheading);

    const isInView = useInView(containerRef, {
        amount: 0.2,
        once: false,
    })

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

    return (
        <header className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="max-w-[1115px] w-full mx-auto uppercase pt-20" ref={containerRef}>
                {hasEyebrow && <motion.span variants={textMaskAnimation} initial="initial" animate={isInView ? "animate" : "initial"} className="block tracking-[0.41em] mb-10 relative overflow-hidden">{eyebrow}</motion.span>}
                <h1 className={`uppercase text-[8.25rem] leading-[0.83] font-heading font-black flex flex-col relative ${isInView ? "text-mask-anim" : "text-mask"}`}>
                    <span className="relative" ref={headingRef}>
                        {heading}
                    </span>
                    <span className="sr-only">{heading}</span>
                </h1>
                {hasSubheading && <span className="block mt-10 text-base tracking-[0.41em] font-body font-normal">{subheading}</span>}

            </div>
        </header>
    )
}

export default Masthead;