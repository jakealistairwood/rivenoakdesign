import React from "react";
import { fetchProducts } from "@/sanity/api";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

import OurProducts from "@/pages/OurProducts";

export default async function Products() {
    // const data = await fetchPageData("/portfolio");
    // const portfolio = await fetchPortfolio();
    // const categories = await fetchCategories();
    const products = await fetchProducts();
  
    return (
      <>
        <OurProducts products={products} />
      </>
    );
  }