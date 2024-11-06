"use client"

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { checkPropertyExists } from "@/utils/helpers";
import Link from "next/link";
import { PortableText } from "next-sanity";
import AnimatedLink from "../animations/AnimatedLink";

import Gallery from "../flexible/Gallery";
// const Gallery = dynamic(() => import("@/components/flexible/Gallery"));
const ProductsCarousel = dynamic(() => import("@/components/flexible/ProductsCarousel"));

const ProductPage = ({ product, otherProducts }) => {
    console.log(product);
    const { title = "", slug = "", excerpt = "", description = "", thumbnail } = product;
    
    const hasOtherProducts = checkPropertyExists(otherProducts);

    const filteredOtherProducts = otherProducts.filter(prod => prod.slug.current !== product.slug);

    const productCarousel = {
        _type: "productCarousel",
        products: filteredOtherProducts,
        sectionHeader: {
            _type: "sectionHeader",
            heading: "Other Products",
            description: ""
        }
    }

    console.log(`gallery photos: `, product?.gallery);

    return (
        <>
            <section className="py-16 md:py-[7.5rem] overflow-hidden px-4 lg:px-0">
                <div className="max-w-[1440px] w-full mx-auto flex flex-col-reverse lg:grid lg:grid-cols-12 gap-x-20">
                    <div className="hidden lg:block relative w-full max-h-[854px] aspect-[1024/854] col-span-7">
                        {thumbnail?.asset && <Image src={urlFor(thumbnail?.asset)} alt="" fill className="w-full object-cover" />}    
                    </div>
                    <div className="col-span-5 flex flex-col md:mt-10">
                        <Breadcrumb currentPage={title} />
                        <div className="block lg:hidden relative w-full max-h-[854px] aspect-[1024/854] mb-10">
                            {thumbnail?.asset && <Image src={urlFor(thumbnail?.asset)} alt={`${title}`} fill className="w-full object-cover" placeholder={thumbnail?.placeholder} />}    
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <strong className="bg-[#0000000d] text-black w-fit uppercase text-sm font-mono tracking-[0.14em] px-[10px] py-1 mb-2 font-normal">Product</strong>
                            <h1 className="font-serif ~text-[3rem]/[4.5rem]">{title}</h1>
                            {/* {excerpt && excerpt.length > 0 && (
                                <p className="text-[1.125rem] leading-[1.6] text-gray-700">
                                    {excerpt}
                                </p>
                            )} */}
                            {checkPropertyExists(description) && (
                                <div className="product-prose prose md:mt-4">
                                    <PortableText value={description} />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row mt-12 md:mt-20 gap-x-3 gap-y-4">
                            <Link href="/contact" className="group relative inline-flex px-10 py-4 items-center justify-center overflow-hidden rounded-md bg-[#1F1F1F] font-semibold text-white duration-200">
                                <div class="translate-y-0 transition group-hover:-translate-y-[150%]">Make an order</div>
                                <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">Make an order</div>
                            </Link>
                            <Link href="#faqs" className="group relative inline-flex px-10 py-4 items-center justify-center overflow-hidden rounded-md border border-[#E8E8E8] font-medium text-black duration-200">
                                <div class="translate-y-0 transition group-hover:-translate-y-[150%]">View FAQs</div>
                                <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">View FAQs</div>
                            </Link>
                            {/* <Link className="bg-[#1F1F1F] text-white rounded-[6px] text-sm font-semibold px-10 py-4 text-center" href="/contact">Make an order</Link> */}
                            {/* <Link className="border border-[#E8E8E8] text-black rounded-[6px] text-sm font-semibold px-10 py-4 text-center" href="#faqs">View FAQs</Link> */}
                        </div>
                    </div>
                </div>
            </section>
            {checkPropertyExists(product?.gallery) && (
                <section className="bg-white text-black pt-8 pb-12 md:pt-0 md:pb-[7.5rem]">
                    <div className="container">
                        <Gallery gallery={product?.gallery} productTitle={title} />
                    </div>
                </section>
            )}
            {hasOtherProducts && (
                <section className="py-12 md:py-[7.5rem] bg-slate-green text-white overflow-hidden">
                    <div className="container">
                        <ProductsCarousel {...productCarousel} />
                    </div>
                </section>
            )}
        </>
    )
}

export default ProductPage;


const Breadcrumb = ({ currentPage }) => {
    return (
        <div className="flex items-center gap-x-2 mb-4 lg:mb-20">
            <Link className="underline font-medium hover:opacity-60 duration-200 transition-opacity" href="/products">Products</Link>
            <div className="max-w-4 min-w-4">
                {/* <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg> */}
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
            </div>
            <span className="opacity-50">{currentPage}</span>
        </div>
    )
}