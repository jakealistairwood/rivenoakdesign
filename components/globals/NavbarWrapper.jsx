"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const NavbarWrapper = () => {
    const [hideOnScroll, setHideOnScroll] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
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
            }
        }
    }

    return (
        <motion.header variants={hideOnScrollAnimation} initial="initial" animate={hideOnScroll ? "hidden" : "initial"} className="fixed px-4 w-full mx-auto left-0 right-0 top-4 z-[999]">
            <div className="max-w-[1440px] w-full mx-auto bg-[#EFEFEF] rounded-md">
                <div className="container">
                    <div className="flex items-center justify-between py-3">
                        <nav className="flex items-center gap-x-[110px] uppercase">
                            <Link className="uppercase font-heading tracking-[0.28em] font-medium text-xl" href="/">Riven Oak.</Link>
                            <menu className="hidden md:flex items-center gap-x-12 font-mono text-xs font-bold">
                                <li>
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/">Products</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" href="/">About</Link>
                                </li>
                            </menu>
                        </nav>
                        <nav className="flex items-center font-mono">
                            <Link className="uppercase tracking-[0.28em] text-sm text-white bg-black py-[15px] px-[26px] rounded" href="/contact">Get in Touch</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default NavbarWrapper;