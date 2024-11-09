import React from "react";
import dynamic from "next/dynamic";
import { fetchProducts, fetchPageData, fetchGlobalOptions, fetchFAQs } from "@/sanity/api";
import Navbar from "@/components/globals/Navbar";
import LayoutRenderer from "@/layouts/LayoutRenderer";

import OurProducts from "@/pages/OurProducts";

const FAQs = dynamic(() => import("@/components/globals/FAQs"));
const CTA = dynamic(() => import("@/components/globals/CTA"));

export default async function Products() {
    // const data = await fetchPageData("/portfolio");
    // const portfolio = await fetchPortfolio();
    // const categories = await fetchCategories();
    const products = await fetchProducts();

    const data = await fetchPageData("/products");
    const globalOptions = await fetchGlobalOptions();
    const faqs = await fetchFAQs();

    const hideCTA = data?.hide_global_cta;
    const hideFAQs = data?.hide_faqs;
  
    return (
      <>
        <Navbar navbarBg="white" />
        <main>
          <OurProducts products={products} />
          <LayoutRenderer page={data} globalOptions={globalOptions} />
          {!hideFAQs && <FAQs faqs={faqs} faqOptions={globalOptions?.faq_block} />}
          {!hideCTA && <CTA {...globalOptions?.cta_block} />}
        </main>
      </>
    );
  }