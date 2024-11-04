import React from "react";
import dynamic from "next/dynamic";
import { fetchProductData, fetchProducts, fetchFAQs, fetchGlobalOptions } from "@/sanity/api";
import ProductPage from "@/components/pages/ProductPage";
import Navbar from "@/components/globals/Navbar";

const FAQs = dynamic(() => import("@/components/globals/FAQs"));
const CTA = dynamic(() => import("@/components/globals/CTA"));

export default async function Product({ params }) {
    const { product } = params;

    const data = await fetchProductData(product);
    const products = await fetchProducts();
    const globalOptions = await fetchGlobalOptions();
    const faqs = await fetchFAQs();

    return (
        <>
            <Navbar navbarBg="white" />
            <main>
                <ProductPage product={data} otherProducts={products} />
                <FAQs faqs={faqs} faqOptions={globalOptions?.faq_block} />
                <CTA {...globalOptions?.cta_block} />
            </main>
        </>
    );
}
