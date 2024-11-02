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
                        <button class="group relative inline-flex items-center justify-center rounded-md bg-transparent font-medium text-black">
                            <span>View all</span>
                            <div class="relative ml-1 h-5 w-5 overflow-hidden">
                                <div class="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 -translate-x-4"
                                    >
                                        <path
                                            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </button>
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

    return (
        <div className="flex flex-col group">
            <div className="relative aspect-[1/1] overflow-hidden">
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-[3px]"
                >
                    <Link
                        className="absolute inset-0 h-full w-full rounded-[3px]"
                        href={`/products/${slug?.current}`}
                    >
                        <div
                            className="flex flex-col relative aspect-[1/1] p-10"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            onFocus={() => setHovered(true)}
                            onBlur={() => setHovered(false)}
                        >
                            <Image
                                src={urlFor(thumbnail?.asset)}
                                layout="fill"
                                objectFit="cover"
                                className={`transition-transform rounded-[3px] duration-300 absolute inset-0 h-full w-full ease-in-out ${hovered ? "scale-105" : "scale-100"}`}
                                placeholder={thumbnail?.placeholder}
                                // className="transition-transform duration-300 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-[50%] z-[2]" style={{
                                backgroundImage: "linear-gradient(to bottom, transparent, #000000)",
                            }} />
                            <h3 className="relative z-[4] text-white mt-auto font-serif w-fit text-3xl">{title}</h3>
                        </div>
                    </Link>
                </div>
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
