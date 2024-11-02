import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

const OurProducts = ({ products }) => {
    const renderProducts = products && products.length > 0;
    return (
        <main className="bg-[#F2FBF6] text-black py-[180px]">
            <div className="container">
                <div className="flex flex-col gap-y-20">
                    <div className="flex items-center justify-between">
                        <header>
                            <h1 className="uppercase font-heading font-bold text-[7rem] leading-[0.83]">
                                Our Products
                            </h1>
                        </header>
                        {renderProducts && (
                            <p className="text-[7rem] font-extralight">
                                &#40;{products?.length}&#41;
                            </p>
                        )}
                    </div>
                    {renderProducts && (
                        <div className="grid grid-cols-2 gap-10">
                            {products?.map((product, index) => (
                                <ProductCard
                                    {...product}
                                    index={index}
                                    key={`product-card-${product?._id}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default OurProducts;

const ProductCard = ({ title, thumbnail, slug }) => {
    return (
        <Link
            className="flex relative aspect-[794/452] text-white p-10 group overflow-hidden rounded-3xl"
            href={`/products/${slug?.current}`}
        >
            <Image
                src={urlFor(thumbnail?.asset)}
                alt={thumbnail?.alt_text}
                className="object-cover h-full w-full relative z-[1] scale-100 group-hover:scale-[102%] duration-200 ease transition-transform"
                fill
            />
            <div className="bg-gradient-to-b from-black/0 to-black absolute z-[2] bottom-0 left-0 right-0 h-[50%] w-full" />
            <div className="flex flex-col self-end relative z-[3]">
                <div className="flex flex-col gap-y-10">
                    <h3 className="text-[2rem]">{title}</h3>
                </div>
            </div>
            <div className="bg-white text-white absolute bottom-0 right-0 rounded-tl-3xl h-[5rem] w-[5rem] z-[3]">
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
            </div>
        </Link>
    );
};
