import React, { useRef, useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { checkPropertyExists } from "@/utils/helpers";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ProductsCarousel = (props) => {
    const { sectionHeader, products } = props;

    const hasProducts = checkPropertyExists(products);

    const containerRef = useRef(null);
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance) {
            const { isBeginning, isEnd } = swiperInstance;

            if (prevBtnRef.current) {
                prevBtnRef.current.disabled = isBeginning;
            }
            if (nextBtnRef.current) {
                nextBtnRef.current.disabled = isEnd;
            }

            swiperInstance.on("slideChange", () => {
                const { isBeginning, isEnd } = swiperInstance;
                if (prevBtnRef.current) {
                    prevBtnRef.current.disabled = isBeginning;
                }
                if (nextBtnRef.current) {
                    nextBtnRef.current.disabled = isEnd;
                }
            });
        }
    }, [swiperInstance]);

    return (
        <div className="flex flex-col" id="products-carousel">
            <div className="relative flex justify-between items-end">
                <SectionHeader {...sectionHeader} />
                <div className="flex items-center gap-2">
                    <button
                        className="p-3 border border-black/20 enabled:group-hover:bg-vibrant-green rounded group relative overflow-hidden carousel-btn"
                        ref={prevBtnRef}
                        type="button"
                        aria-label="Previous Product"
                        disabled
                    >
                        <div className="bg-vibrant-green opacity-0 absolute inset-0 h-full w-full enabled:group-hover:opacity-100 duration-300 ease z-[1]" />
                        <IndicatorIcon />
                    </button>
                    <button
                        className="p-3 border border-black/20 rounded carousel-btn"
                        ref={nextBtnRef}
                        type="button"
                        aria-label="Next Product"
                    >
                        <IndicatorIcon rotate />
                    </button>
                    <Link
                        className="flex items-center gap-x-2 ml-4"
                        href="/products"
                    >
                        <span className="decoration-current decoration-dotted">
                            View all
                        </span>
                        <div className="w-[20px] h-[20px]">
                            <svg
                                className="w-full h-full"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            {hasProducts && (
                <div className="mt-20" ref={containerRef}>
                    <Swiper
                        onSwiper={setSwiperInstance}
                        modules={[Navigation]}
                        slidesPerView={3}
                        spaceBetween={20}
                        navigation={{
                            prevEl: prevBtnRef.current,
                            nextEl: nextBtnRef.current,
                        }}
                        onInit={(swiper) => {
                            // Disable prev button on init if on first slide
                            if (prevBtnRef.current) {
                                prevBtnRef.current.disabled =
                                    swiper.isBeginning;
                            }
                            // Disable next button on init if on last slide
                            if (nextBtnRef.current) {
                                nextBtnRef.current.disabled = swiper.isEnd;
                            }
                        }}
                    >
                        {products?.map((product, i) => (
                            <SwiperSlide
                                key={`product-carousel-item-${product?._id}`}
                            >
                                <ProductTypePreview {...product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default ProductsCarousel;

const ProductTypePreview = ({ title, slug, thumbnail }) => {
    const [hovered, setHovered] = useState(false);
    // const mask = "M 16 0 H 687 q 16 0 16 16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 312 q 0 16 -16 16 l -59 0 q -16 0 -16 16 l 0 35 q 0 16 -16 16 H 16 q -16 0 -16 -16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 16 q 0 -16 16 -16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0";
    // const mask = "M 156.013 0 H 687 q 16 0 16 16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 312 q 0 16 -16 16 l -59 0 q -16 0 -16 16 l 0 35 q 0 16 -16 16 H 16 q -16 0 -16 -16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 65.0044 q 0 -16 16 -16 l 117.611 0 q 11.201 0 11.201 -11.201 l 0 -26.6024 q 0 -11.201 11.201 -11.201";
    const mask =
        "M 130.812 0 H 687 q 16 0 16 16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 312 q 0 16 -16 16 l -59 0 q -16 0 -16 16 l 0 35 q 0 16 -16 16 H 16 q -16 0 -16 -16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 56.184 q 0 -16 16 -16 l 96.4417 0 q 9.18492 0 9.18492 -9.18492 l 0 -21.8142 q 0 -9.18492 9.18492 -9.18492";
    return (
        <div className="flex flex-col group">
            <div className="relative aspect-[1/1] overflow-hidden">
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl"
                    style={{ clipPath: `path(${mask})` }}
                >
                    <Link
                        className="absolute inset-0 h-full w-full rounded-xl"
                        href={`/products/${slug?.current}`}
                    >
                        <div
                            className="flex flex-col relative aspect-[1/1]"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            onFocus={() => setHovered(true)}
                            onBlur={() => setHovered(false)}
                        >
                            <Image
                                src={urlFor(thumbnail?.asset)}
                                layout="fill"
                                objectFit="cover"
                                className={`transition-transform rounded-xl duration-300 absolute inset-0 h-full w-full ease-in-out ${hovered ? "scale-105" : "scale-100"}`}
                                // className="transition-transform duration-300 ease-in-out"
                            />
                            {/* <div className="absolute bottom-0 right-0 bg-white z-[4] w-[91px] h-[67px]">
                                    view
                                </div> */}
                            {/* <Image src={urlFor(thumbnail?.asset)} fill className={`w-full h-full relative z-[1] overflow-hidden ${hovered ? "blur-md" : "blur-none"}`} /> */}
                            {/* <div className="absolute inset-0 h-full w-full z-[2]" style={{ clipPath: `path("M 16 0 H 687 q 16 0 16 16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 312 q 0 16 -16 16 l -59 0 q -16 0 -16 16 l 0 35 q 0 16 -16 16 H 16 q -16 0 -16 -16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0 V 16 q 0 -16 16 -16 l 0 0 q 0 0 0 0 l 0 0 q 0 0 0 0")` }}></div> */}
                            {/* <div className="absolute px-2 py-1 rounded text-sm tracking-wide bg-white text-black top-4 left-4">Product</div> */}
                            {/* <Image src={urlFor(thumbnail?.asset)} fill className="w-full h-full relative z-[1] overflow-hidden" /> */}
                            {/* <div
                                className={`relative h-full z-[2] ${hovered ? "bg-[#ACABA0]/30" : "bg-[#ACABA0]/0"} duration-300 ease transition-all p-10 text-white`}
                                >
                                {hovered && (
                                    <div className="flex flex-col h-full max-w-[233px] w-full">
                                    <h3 className="uppercase font-heading tracking-[0.22em] leading-[1.2] text-xl">
                                    {title}
                                    </h3>
                                    </div>
                                    )}
                                    </div> */}
                            {/* <div className="bg-white text-white absolute bottom-0 right-0 rounded-tl-3xl h-[5rem] w-[5rem] z-[3]">
                                <svg
                                    className="w-[3rem] h-[3rem] top-[1px] -right-[1px] absolute -translate-y-[100%] -rotate-[270deg]"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M98.0996 0H99.9996V51.9H98.0996C98.0996 24.3 75.6996 1.9 48.0996 1.9V0H98.0996Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <svg
                                    className="w-[3rem] h-[3rem] absolute -bottom-[1px] left-[1px] rotate-[90deg] -translate-x-[100%]"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M98.0996 0H99.9996V51.9H98.0996C98.0996 24.3 75.6996 1.9 48.0996 1.9V0H98.0996Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div className="relative pl-4 pt-4 pb-0 h-full">
                                    <div className="bg-[#F1F1F1] text-black group-hover:bg-vibrant-green transition-colors duration-200 ease h-full rounded-[14px] flex items-center justify-center">
                                        <svg
                                            width="21"
                                            height="21"
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.5 6.49707L17.5 10.4991L13.5 14.5001M4.5 10.5001H17.5"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-y-[4px] mt-6 px-3">
                {/* <p className="uppercase font-medium font-mono tracking-widest opacity-90">Product</p> */}
                <h3
                    className={`font-serif relative w-fit text-3xl`}
                >
                    {title}
                    <div className="absolute -bottom-2 left-0 right-0 w-full h-[2px]">
                        <div className="relative h-full overflow-hidden w-full">
                            <div className="scale-x-0 h-full w-full bg-black/[40%] origin-left group-hover:scale-x-100 duration-50 ease-in-out transition-all" />
                        </div>
                    </div>
                </h3>
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{
                        duration: 0.2,
                        type: "spring",
                        stiffness: 150,
                    }}
                    className="flex items-center rounded justify-center gap-x-2 overflow-hidden"
                >
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.5 6.49707L17.5 10.4991L13.5 14.5001M4.5 10.5001H17.5"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </motion.div> */}
            </div>
        </div>
    );
};

const IndicatorIcon = ({ rotate = false }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`relative z-[2] ${rotate ? "rotate-180" : "rotate"}`}
        >
            <path
                d="M6.86333 13.144C6.92567 13.2055 6.99951 13.2542 7.08063 13.2871C7.16176 13.3201 7.24858 13.3368 7.33615 13.3362C7.42371 13.3356 7.5103 13.3177 7.59098 13.2837C7.67165 13.2496 7.74483 13.2 7.80633 13.1377C7.86784 13.0754 7.91646 13.0015 7.94943 12.9204C7.98239 12.8393 7.99906 12.7525 7.99847 12.6649C7.99788 12.5773 7.98005 12.4907 7.946 12.4101C7.91194 12.3294 7.86233 12.2562 7.8 12.1947L4.22 8.6667H13.3333C13.5101 8.6667 13.6797 8.59646 13.8047 8.47144C13.9298 8.34641 14 8.17684 14 8.00003C14 7.82322 13.9298 7.65365 13.8047 7.52863C13.6797 7.4036 13.5101 7.33337 13.3333 7.33337L4.22333 7.33337L7.8 3.81003C7.9196 3.68469 7.9857 3.51771 7.98431 3.34447C7.98292 3.17123 7.91415 3.00534 7.79256 2.88193C7.67097 2.75852 7.50611 2.68729 7.33291 2.68332C7.15971 2.67936 6.99177 2.74298 6.86467 2.8607L2.248 7.4087C2.16939 7.48623 2.10697 7.5786 2.06436 7.68046C2.02176 7.78231 1.99982 7.89162 1.99982 8.00203C1.99982 8.11244 2.02176 8.22175 2.06436 8.32361C2.10697 8.42546 2.16939 8.51784 2.248 8.59536L6.86333 13.144Z"
                fill="currentColor"
            />
        </svg>
    );
};
