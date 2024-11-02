"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { lineOneAnimation, lineTwoAnimation } from "@/utils/animations";
import AnimatedLink from "../animations/AnimatedLink";

const NewNavbar = () => {
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const [animateHeader, setAnimateHeader] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous > 200) {
            setAnimateHeader(true);
        } else {
            setAnimateHeader(false);
        }
        if (latest > previous && latest > 200) {
            setHideOnScroll(true);
        } else {
            setHideOnScroll(false);
        }
    });

    const hideOnScrollAnimation = {
        initial: {
            y: "0",
        },
        hidden: {
            y: "-120%",
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.header
            variants={hideOnScrollAnimation}
            initial="initial"
            animate={hideOnScroll ? "hidden" : "initial"}
            className="fixed w-full mx-auto left-0 right-0 top-0 z-[999]"
        >
            <div
                className={`w-full mx-auto ${animateHeader ? "bg-[#F5F5F5] text-black" : "bg-[#3B3B3B]/30 text-white"} transition-colors duration-300 ease-in-out`}
            >
                <div className="container">
                    <div className="flex items-center justify-between py-3">
                        <nav className="flex items-center gap-x-[110px]">
                            <Link
                                className="uppercase font-heading tracking-[0.28em] font-medium text-lg pointer-events-none"
                                href="/"
                            >
                                Riven Oak Design.
                            </Link>
                            <menu className="flex items-center gap-x-10 font-body text-xs font-medium">
                                <li>
                                    <NavLink href="/" label="Home" />
                                </li>
                                <li>
                                    <NavLink href="/products" label="Products" />
                                </li>
                                <li>
                                    <NavLink href="/about" label="About" />
                                </li>
                            </menu>
                        </nav>
                        <nav className="flex items-center font-body gap-x-8">
                            <NavLink href="/contact" label="Contact Us" />
                            <NavCTA animateHeader={animateHeader} />
                        </nav>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default NewNavbar;

const NavLink = ({ href, label }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            className="text-sm tracking-wide font-medium block relative"
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
        >
            <AnimatedLink hovered={hovered} label={label} />
        </Link>
    )
}

const NavCTA = ({ animateHeader = false }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            className={`block tracking-wide text-sm py-3 px-6 font-medium rounded relative ${animateHeader ? "bg-[#1F1F1F] text-white" : "border border-white/[30%] text-white hover:bg-[#E5E0CE] hover:text-walnut"} duration-200 transition-all ease`}
            href="/contact"
        >
            <AnimatedLink hovered={hovered} label="Get in Touch" />
        </Link>
    );
};
