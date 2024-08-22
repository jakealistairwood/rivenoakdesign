import React, { useRef, useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { checkPropertyExists } from "@/utils/helpers";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col">
            <div className="relative flex justify-between items-end">
                <SectionHeader {...sectionHeader} />
                <div className="flex items-center gap-2">
                    <button
                        className="p-3 bg-vibrant-green rounded"
                        ref={prevBtnRef}
                        type="button"
                        aria-label="Previous Product"
                        disabled
                    >
                        <IndicatorIcon />
                    </button>
                    <button
                        className="p-3 bg-vibrant-green rounded"
                        ref={nextBtnRef}
                        type="button"
                        aria-label="Next Product"
                    >
                        <IndicatorIcon rotate />
                    </button>
                </div>
            </div>
            {hasProducts && (
                <div className="mt-20" ref={containerRef}>
                    <Swiper
                        onSwiper={setSwiperInstance}
                        modules={[Navigation]}
                        slidesPerView={4}
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
        <Link href={`/products/${slug?.current}`}>
            <div
                className="flex flex-col relative aspect-[1/1] overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={() => setHovered(false)}
            >
                {/* <Image src={urlFor(thumbnail?.asset)} fill className={`w-full h-full relative z-[1] overflow-hidden ${hovered ? "blur-md" : "blur-none"}`} /> */}
                <Image
                    src={urlFor(thumbnail?.asset)}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-transform duration-300 ease-in-out ${hovered ? "blur-md scale-110" : "blur-none scale-100"}`}
                />

                {/* <Image src={urlFor(thumbnail?.asset)} fill className="w-full h-full relative z-[1] overflow-hidden" /> */}
                <div
                    className={`relative h-full z-[2] ${hovered ? "bg-[#ACABA0]/30" : "bg-[#ACABA0]/0"} duration-300 ease transition-all p-10 text-white`}
                >
                    {hovered && (
                        <div className="flex flex-col h-full max-w-[233px] w-full">
                            <h3 className="uppercase font-heading tracking-[0.22em] leading-[1.2] text-xl">
                                {title}
                            </h3>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <h3 className="font-mono text-base tracking-[0.22em] uppercase">{title}</h3>
            </div>
        </Link>
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
            className={`${rotate ? "rotate-180" : "rotate"}`}
        >
            <path
                d="M6.86333 13.144C6.92567 13.2055 6.99951 13.2542 7.08063 13.2871C7.16176 13.3201 7.24858 13.3368 7.33615 13.3362C7.42371 13.3356 7.5103 13.3177 7.59098 13.2837C7.67165 13.2496 7.74483 13.2 7.80633 13.1377C7.86784 13.0754 7.91646 13.0015 7.94943 12.9204C7.98239 12.8393 7.99906 12.7525 7.99847 12.6649C7.99788 12.5773 7.98005 12.4907 7.946 12.4101C7.91194 12.3294 7.86233 12.2562 7.8 12.1947L4.22 8.6667H13.3333C13.5101 8.6667 13.6797 8.59646 13.8047 8.47144C13.9298 8.34641 14 8.17684 14 8.00003C14 7.82322 13.9298 7.65365 13.8047 7.52863C13.6797 7.4036 13.5101 7.33337 13.3333 7.33337L4.22333 7.33337L7.8 3.81003C7.9196 3.68469 7.9857 3.51771 7.98431 3.34447C7.98292 3.17123 7.91415 3.00534 7.79256 2.88193C7.67097 2.75852 7.50611 2.68729 7.33291 2.68332C7.15971 2.67936 6.99177 2.74298 6.86467 2.8607L2.248 7.4087C2.16939 7.48623 2.10697 7.5786 2.06436 7.68046C2.02176 7.78231 1.99982 7.89162 1.99982 8.00203C1.99982 8.11244 2.02176 8.22175 2.06436 8.32361C2.10697 8.42546 2.16939 8.51784 2.248 8.59536L6.86333 13.144Z"
                fill="currentColor"
            />
        </svg>
    );
};
