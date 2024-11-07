"use client";

import React, { useState } from "react";
import Link from "next/link";
import { animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { lineOneAnimation, lineTwoAnimation } from "@/utils/animations";
import AnimatedLink from "../animations/AnimatedLink";
import { checkPropertyExists } from "@/utils/helpers";

const NewNavbar = ({ navbarBg, contactDetails }) => {
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const [animateHeader, setAnimateHeader] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const { phone = "" } = contactDetails;

    console.log(phone);

    const isPhoneNumber = checkPropertyExists(phone);

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

    const bgStyles = {
        default: animateHeader || openMobileMenu ? "bg-[#F5F5F5] text-black" : "bg-[#3B3B3B]/30 text-white",
        white: "bg-[#F5F5F5] text-black",
    };

    const hamburgerStyles = {
        default: animateHeader || openMobileMenu ? "bg-black" : "bg-white",
        white: "bg-black",
    }

    return (
        <motion.header
            variants={hideOnScrollAnimation}
            initial="initial"
            animate={hideOnScroll ? "hidden" : "initial"}
            className="fixed w-full mx-auto left-0 right-0 top-0 z-[999]"
        >
            <div
                className={`w-full mx-auto ${bgStyles[navbarBg]} transition-colors duration-300 ease-in-out`}
            >
                <div className="container">
                    <div className="flex items-center justify-between py-3">
                        <nav className="flex justify-between md:justify-normal items-center gap-x-10 md:gap-x-[110px] w-full md:w-fit">
                            <Link
                                className="uppercase font-heading tracking-[0.28em] font-medium text-[0.875rem] lg:text-[1rem] pointer-events-none"
                                href="/"
                            >
                                Riven Oak Design.
                            </Link>
                            <menu className="hidden md:flex items-center gap-x-10 font-body text-xs font-medium">
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
                            <button 
                                type="button" 
                                className="flex md:hidden flex-col items-center justify-center gap-y-[6px]"
                                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                            >
                                <div className={`h-[1px] w-[24px] ${hamburgerStyles[navbarBg]}`}></div>
                                <div className={`h-[1px] w-[24px] ${hamburgerStyles[navbarBg]}`}></div>
                                <div className={`h-[1px] w-[24px] ${hamburgerStyles[navbarBg]}`}></div>
                            </button>
                        </nav>
                        <nav className="hidden md:flex items-center font-body gap-x-8">
                            {isPhoneNumber && (
                                <Link href={`tel:${phone.replace(/ /g,'')}`} className="flex items-center gap-x-2 font-body tracking-wide text-sm opacity-100 hover:opacity-80 duration-200 transition-opacity">
                                    <div className="flex items-center min-w-4 max-w-4 justify-center relative aspect-[1/1]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z"></path></svg>
                                    </div>         
                                    {phone}
                                </Link>
                            )}
                            <NavCTA animateCTA={animateHeader || openMobileMenu} animateHeader={animateHeader} navbarBg={navbarBg} />
                        </nav>
                    </div>
                    {openMobileMenu && (
                        <nav className="pt-8 pb-10">
                            <menu className="flex flex-col font-body text-xs font-medium">
                                <li className="py-4">
                                    <NavLink href="/" label="Home" />
                                </li>
                                <li className="py-4">
                                    <NavLink href="/products" label="Products" />
                                </li>
                                <li className="py-4">
                                    <NavLink href="/about" label="About" />
                                </li>
                            </menu>
                        </nav>
                    )}
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

const NavCTA = ({ animateCTA = false, navbarBg }) => {
    const [hovered, setHovered] = useState(false);
    
    const buttonStyles = {
        default: animateCTA ? "bg-[#1F1F1F] text-white border border-[#1F1F1F]" : "border border-white/[30%] text-white hover:bg-[#E5E0CE] hover:text-walnut",
        white: "bg-[#1F1F1F] text-white border border-[#1F1F1F]", 
    }

    return (
        <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            className={`block tracking-wide text-sm py-3 px-6 font-medium rounded relative ${buttonStyles[navbarBg]} duration-200 transition-all ease`}
            href="/contact"
        >
            <AnimatedLink hovered={hovered} label="Get in Touch" />
        </Link>
    );
};
