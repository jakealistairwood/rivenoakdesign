"use client"

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { checkPropertyExists } from "@/utils/helpers";

const ProductsCarousel = dynamic(() => import("@/components/flexible/ProductsCarousel"));

const ProductPage = ({ product, otherProducts }) => {
    const { title = "", slug = "", excerpt = "", thumbnail } = product;
    
    const hasOtherProducts = checkPropertyExists(otherProducts);

    const filteredOtherProducts = otherProducts.filter(prod => prod.slug.current !== product.slug);

    console.log(filteredOtherProducts);

    const productCarousel = {
        _type: "productCarousel",
        products: filteredOtherProducts,
        sectionHeader: {
            _type: "sectionHeader",
            heading: "Other Products",
            description: ""
        }
    }

    return (
        <>
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
            {hasOtherProducts && (
                <section className="py-[7.5rem] bg-slate-green text-white">
                    <div className="container">
                        <ProductsCarousel {...productCarousel} />
                    </div>
                </section>
            )}
        </>
    )
}

export default ProductPage;