import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function SplitText({ text }) {
    const textArray = Array.isArray(text) ? text : [text];

    const ref = useRef(null);

    const isInView = useInView(ref, {
        amount: 0.2,
        once: true,
    });

    // Variants for the animation
    const characterVariants = {
        hidden: {
            y: "100%",
            opacity: 0,
        },
        visible: {
            y: "0%",
            opacity: 1,
        },
    };

    return (
        <span ref={ref}>
            <span className="sr-only">{textArray.join(" ")}</span>
            <motion.span
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ staggerChildren: 0.05 }}
                aria-hidden
            >
                {textArray.map((line, lineIndex) => (
                    <span className="block line" key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word, wordIndex) => (
                            <span
                                className="inline-block"
                                key={`${word}-${wordIndex}`}
                            >
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={`${char}-${charIndex}`}
                                        className="inline-block"
                                        variants={characterVariants}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </span>
    );
}
