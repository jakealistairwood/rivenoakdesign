import React from "react";
import { motion } from "framer-motion";
import { lineOneAnimation, lineTwoAnimation } from "@/utils/animations";

const AnimatedLink = ({ label, hovered }) => {
    return (
        <div className="relative !overflow-hidden">
            <span className="inline-block relative opacity-0" aria-hidden>
                {label}
            </span>
            <motion.span
                variants={lineOneAnimation}
                initial="initial"
                animate={hovered ? "animate" : "initial"}
                className="inline-block absolute whitespace-nowrap top-0 left-0"
            >
                {label}
            </motion.span>
            <motion.span
                variants={lineTwoAnimation}
                initial="initial"
                animate={hovered ? "animate" : "initial"}
                aria-hidden
                className="inline-block absolute top-0 left-0 whitespace-nowrap"
            >
                {label}
            </motion.span>
        </div>
    );
};

export default AnimatedLink