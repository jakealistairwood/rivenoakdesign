"use client"

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { checkPropertyExists } from "@/utils/helpers";

const capitalizeWords = (str) => {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

const OurProducts = ({ products }) => {
    const renderProducts = products && products.length > 0;
    const [filters, setFilters] = useState(products?.map((product) => product?.title));
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProducts = activeFilter === "all" ? products : products.filter((product) => product?.title.toLowerCase() === activeFilter);

    const handleFilter = (filterLabel) => {
        if (filterLabel.toLowerCase() === "all") {
            setActiveFilter("all");
        } else {
            setActiveFilter(filterLabel.toLowerCase());
        }
    }

    return (
        <main className="bg-white text-black pt-[8rem] md:pt-[10rem] pb-[7.5rem]">
            <div className="container">
                <div className="flex flex-col gap-y-10 md:gap-y-20">
                    <div className="flex flex-col gap-y-14">
                        <header>
                            <h1 className="font-serif ~text-[3rem]/[5.5rem] leading-[100%]">
                                Discover Our Full Range
                            </h1>
                        </header>
                        {checkPropertyExists(filters) && (
                            <>
                                <div className="hidden md:flex items-center gap-x-4 border-b border-black/[10%] pb-4">
                                    <h2 className="font-mono uppercase text-xs font-bold">Filter by:</h2>
                                    <div className="flex items-center flex-wrap p-2">
                                        <FilterTab filter="All" activeFilter={activeFilter} handleFilter={handleFilter} index={0} />
                                        {filters?.map((filter, i) => (
                                            <FilterTab key={`product-filter-${i}`} filter={filter} activeFilter={activeFilter} handleFilter={handleFilter} index={i + 1} />
                                        ))}
                                    </div>
                                </div>
                                <MobileFilterMenu filters={filters} handleFilter={handleFilter} activeFilter={activeFilter} />
                            </>
                        )}
                    </div>
                    {renderProducts && (
                        <div className="flex gap-x-20">
                            {/* {checkPropertyExists(filters) && (
                                <div className="flex flex-col gap-y-4 w-full max-w-[250px] bg-[#F9F9F9] h-fit p-4">
                                    <h2 className="font-mono uppercase text-sm">Filter by:</h2>
                                    <div className="flex flex-col">
                                        <FilterTab filter="All" activeFilter={activeFilter} handleFilter={handleFilter} index={0} />
                                        {filters?.map((filter, i) => (
                                            <FilterTab key={`product-filter-${i}`} filter={filter} activeFilter={activeFilter} handleFilter={handleFilter} index={i + 1} />
                                        ))}
                                    </div>
                                </div>
                            )} */}
                            <div className="grow grid grid-cols-1 md:grid-cols-2 gap-10">
                                <AnimatePresence mode="wait">
                                    {filteredProducts?.map((product, index) => (
                                        <ProductCard
                                            {...product}
                                            index={index}
                                            key={`product-card-${product?._id}`}
                                        />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default OurProducts;

const ProductCard = ({ title, excerpt, thumbnail, slug, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, {
        amount: 0.2,
        once: true,
    })

    const cardAnimation = {
        initial: {
            opacity: 0,
            y: 50,
            scale: 0.9,
            filter: "blur(20px)",
        },
        animate: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.2,
                delay: i * 0.05,
                ease: "easeInOut",
            }
        }),
        exit: {
            opacity: 0,
        }
    }

    return (
        <motion.article variants={cardAnimation} initial="initial" animate={isInView ? "animate" : "initial"} exit="exit" custom={index} className="flex flex-col" ref={cardRef}>
            <h3 className="font-serif ~text-[2rem]/[3rem] mb-4">{title}</h3>
            <Link
                className="flex relative aspect-[3/2] text-white p-10 group overflow-hidden rounded-[3px]"
                href={`/products/${slug?.current}`}
            >
                <Image
                    src={urlFor(thumbnail?.asset)}
                    alt={thumbnail?.alt_text}
                    className="object-cover object-top h-full w-full relative z-[1] scale-100 group-hover:scale-[102%] duration-200 ease transition-transform"
                    fill
                />
                <div className="absolute z-[2] bottom-0 left-0 right-0 h-[50%] w-full" />
                {/* <div className="flex flex-col self-end relative z-[3]">
                    <div className="flex flex-col gap-y-10">
                        <h3 className="font-serif text-[2rem]">{title}</h3>
                    </div>
                </div> */}
            </Link>
            <div className="flex flex-col gap-x-10 mt-6 gap-y-4">
                {/* <h3 className="font-serif ~text-[1.5rem]/[3.7rem]">{title}</h3> */}
                <div className="flex flex-col items-start justify-between gap-x-20 gap-y-4">
                    {checkPropertyExists(excerpt) && <p className="font-body text-base -tracking-[0.01rem]">{excerpt}</p>}
                    <Link className="text-base font-body font-medium pb-1 border-b border-black/[10%] w-fit h-fit whitespace-nowrap" href={`/products/${slug?.current}`}>
                        Learn more
                    </Link>
                </div>
            </div>
            {/* <div className="flex flex-col gap-x-10 mt-6 gap-y-4">
                <h3 className="font-serif ~text-[1.5rem]/[3.7rem]">{title}</h3>
                <div className="flex flex-row items-end justify-between gap-x-20 gap-y-4">
                    {checkPropertyExists(excerpt) && <p className="font-body text-sm -tracking-[0.01rem]">{excerpt}</p>}
                    <Link className="text-sm font-body font-medium pb-1 border-b border-black/[10%] w-fit h-fit whitespace-nowrap" href={`/products/${slug?.current}`}>
                        Learn more
                    </Link>
                </div>
            </div> */}
            {/* <div className="grid grid-cols-[180px_1fr] gap-x-10 mt-6 gap-y-4">
                <h3 className="font-serif ~text-[1.5rem]/[2.5rem]">{title}</h3>
                <div className="flex flex-col gap-y-4">
                    {checkPropertyExists(excerpt) && <p className="font-body text-sm -tracking-[0.01rem]">{excerpt}</p>}
                    <Link className="text-sm font-body font-medium pb-1 border-b border-black/[10%] w-fit" href={`/products/${slug?.current}`}>
                        Learn more
                    </Link>
                </div>
            </div> */}
        </motion.article>
    );
};

const FilterTab = ({ filter, activeFilter, handleFilter, index }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            type="button"
            className={`text-gray-700 w-fit px-4 py-2 rounded-[3px] relative font-mono uppercase text-xs ${
                activeFilter === filter?.toLowerCase() ? "bg-gray-800 text-white" : ""
            }`}
            onClick={() => {
                handleFilter(filter);
            }}
            onMouseEnter={() => setHovered(true)}
            onFocus={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onBlur={() => setHovered(false)}
        >
            <span className="relative text-center z-[3]">{filter}</span>
            {(hovered && activeFilter !== filter.toLowerCase()) && (
                <motion.div 
                    layoutId="hover-tab"
                    transition={{ duration: 0.6, type: "spring", ease: "easeInOut" }}
                    className="bg-[#F9F9F9] rounded-[3px] absolute inset-0 w-full h-full z-[1]"
                />
            )}
        </button>
    )
}

const MobileFilterMenu = ({ filters, handleFilter, activeFilter }) => {
    const [openMobileFilterMenu, setOpenMobileFilterMenu] = useState(false);
    return (
        <div className="flex md:hidden items-center font-mono uppercase text-sm gap-x-4 relative">
            <h2 className="pb-2 font-bold">Filter By:</h2>
            <button 
                className="flex items-center justify-between grow text-left border-b pb-2 border-black/10" 
                type="button"
                onClick={() => {
                    setOpenMobileFilterMenu(!openMobileFilterMenu);
                }}
            >
                {capitalizeWords(activeFilter)}
                <div className="min-w-4 max-w-4">
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
            </button>
            {openMobileFilterMenu && (
                <menu className="absolute top-10 bg-white left-0 w-full z-[3] px-8 py-4 shadow-xl rounded">
                    <li className="border-b border-black/10">
                        <button className="py-4" type="button" onClick={() => {
                            handleFilter("all");
                            setOpenMobileFilterMenu(false);
                        }}>All</button>
                    </li>
                    {filters?.map((filter, i) => (
                        <li key={`mobile-product-menu-filter-${i}`} className="border-b border-black/10 last:border-none">
                            <button className="py-4" type="button" onClick={() => {
                                handleFilter(filter);
                                setOpenMobileFilterMenu(false);
                            }}>{filter}</button>
                        </li>
                    ))}
                </menu>
            )}
        </div>
    )
}