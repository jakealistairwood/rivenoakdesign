"use client"

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductPage = ({ product }) => {
    const { title = "", slug = "", excerpt = "", thumbnail } = product;
    return (
        <section className="py-[7.5rem]">
            <div className="max-w-[1440px] w-full mx-auto flex items-center gap-x-20">
                <div className="relative w-full max-w-[924px] max-h-[854px] aspect-[1024/854]">
                    {thumbnail?.asset && <Image src={urlFor(thumbnail?.asset)} alt="" fill className="w-full object-cover" />}    
                </div>
                <div className="col-span-4">
                    <div className="flex flex-col">
                        <h1 className="font-serif text-[4.5rem]">{title}</h1>
                        {excerpt && excerpt.length > 0 && (
                            <p className="text-[1.25rem] leading-[1.6] text-gray-700">
                                {excerpt}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage;