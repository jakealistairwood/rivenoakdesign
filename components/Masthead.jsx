import React, { useRef, useState, useEffect } from "react";
import { checkPropertyExists } from "@/utils/helpers";
import SplitType from "split-type";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import AnimatedLink from "./animations/AnimatedLink";

const Masthead = (props) => {
    const [imageAnimationsComplete, setImageAnimationsComplete] = useState(false);
    const [pageVisited, setPageVisited] = useState(false);
    const { heading = "", subheading = "", images } = props;

    const { left_block = {}, right_block = {} } = images;

    const headingRef = useRef(null);
    const containerRef = useRef(null);

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

    const finalImagesAnimationState = {
        scale: 1,
        opacity: 1,
        blur: "0px",
        transition: { duration: 0 }
    }

    useEffect(() => {
        const data = window.sessionStorage.getItem("RIVEN_OAK_SESSION_STORAGE_KEY");
        if (data) {
            const dataObj = JSON.parse(data);
            setPageVisited(dataObj.isVisited);
            setImageAnimationsComplete(dataObj.isVisited);
        } else {
            setPageVisited(false);
        }
    }, []);

    useEffect(() => {
        if (!pageVisited) {
            window.sessionStorage.setItem(
                "RIVEN_OAK_SESSION_STORAGE_KEY",
                JSON.stringify({ isVisited: true })
            );
        }
    }, [pageVisited]);

    useEffect(() => {
        if (headingRef.current) {
          new SplitType(headingRef.current);
        }
      }, []);

    useEffect(() => {
        const body = document.querySelector("body");
        if (window.location.href === "/" && !imageAnimationsComplete) {
            body.classList.add("body--fixed");
        }
        if (body.classList.contains("body--fixed") && imageAnimationsComplete) {
            body.classList.remove("body--fixed");
        }
    }, [imageAnimationsComplete]);

    return (
        <header className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="max-w-[1019px] w-full mx-auto pt-20 relative" ref={containerRef}>
                <h1 className="font-serif ~text-[3.5rem]/[5.5rem] -tracking-[2%] leading-[100%] relative z-[2]">{heading}</h1>
                {/* <motion.h1 
                    className={`uppercase text-[8.25rem] leading-[0.83] font-heading font-black flex flex-col relative z-[2] text-mask ${isInView ? "text-mask-anim" : ""}`}
                >
                    <span className="relative" ref={headingRef}>
                        {heading}
                    </span>
                    <span className="sr-only">{heading}</span>
                </motion.h1> */}
                {/* {hasSubheading && <span className="block mt-10 text-base tracking-[0.41em] font-body font-normal">{subheading}</span>} */}
                <div className="flex items-center justify-center gap-x-4 mt-10 relative z-[2]">
                    {/* <Link className="bg-[#E5E0CE] text-walnut px-[30px] py-5 rounded-md font-medium text-sm" href="/">
                        <AnimatedLink hovered={hovered} label="View our Products" />
                    </Link> */}
                    <MastheadLink label="View Our Products" classNames="bg-[#E5E0CE] text-walnut" />
                    <MastheadLink label="About Riven Oak" classNames="bg-white/[6%] text-white" />
                </div>
                <div className="absolute grid grid-cols-2 inset-0">
                    <div className="relative">
                        {left_block?.image_one && <motion.div variants={imageOneAnimation} initial={pageVisited ? finalImagesAnimationState : "initial"} animate="animate" className="absolute z-[1] top-10 -left-[40%] aspect-[370/176] w-full max-w-[370px]" custom={1}>
                            <div className="aspect-[370/176] relative">
                                <Image className="object-cover" src={urlFor(left_block?.image_one?.asset)} alt="" fill priority placeholder={left_block?.image_one?.placeholder} />
                            </div>
                        </motion.div>}
                        {left_block?.image_two && <motion.div className="absolute left-14 -top-20 w-full max-w-[190px] blur-sm grayscale" variants={imageOneAnimation} initial={pageVisited ? finalImagesAnimationState : "initial"} animate="animate" custom={2}>
                            <div className="aspect-[1/1] relative">
                                <Image src={urlFor(left_block?.image_two?.asset)} alt="" fill priority placeholder={left_block?.image_two?.placeholder} />
                            </div>
                        </motion.div>}
                    </div>
                    <div className="relative">
                        {right_block?.image_two && <motion.div variants={imageOneAnimation} initial={pageVisited ? finalImagesAnimationState : "initial"} animate="animate" onAnimationComplete={() => setImageAnimationsComplete(true)} className="max-w-[230px] md:max-w-[332px] w-full right-0 -bottom-[200px] absolute md:-bottom-20 md:-right-[160px]" custom={2.8}>
                            <div className="aspect-[332/227] relative">
                                <Image src={urlFor(right_block?.image_two?.asset)} alt="" fill priority placeholder={right_block?.image_two?.placeholder} />
                            </div>    
                        </motion.div>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Masthead;


const MastheadLink = ({ label, classNames = "" }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <Link 
            className={`${classNames} px-[30px] py-5 rounded-md font-medium text-sm`} 
            href="/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            <AnimatedLink hovered={hovered} label={label} />
        </Link>
    )
}