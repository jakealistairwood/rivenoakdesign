import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

const OurProducts = ({ products }) => {
    const renderProducts = products && products.length > 0;
    return (
        <main className="bg-walnut text-white py-[180px]">
            <div className="container">
                <div className="flex flex-col gap-y-20">
                    <div className="flex items-center justify-between">
                        <header>
                            <h1 className="font-serif ~text-[4rem]/[7rem] leading-[100%]">
                                Our Products
                            </h1>
                        </header>
                        {renderProducts && (
                            <p className="font-serif ~text-[4rem]/[7rem] opacity-30">
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
            className="flex relative aspect-[1/1] text-white p-10 group overflow-hidden rounded-[3px]"
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
                    <h3 className="font-serif text-[2rem]">{title}</h3>
                </div>
            </div>
        </Link>
    );
};
