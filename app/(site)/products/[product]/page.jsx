import React from "react";
import { fetchProductData } from "@/sanity/api";
import ProductPage from "@/components/pages/ProductPage";
import Navbar from "@/components/globals/Navbar";

export default async function Product({ params }) {
    const { product } = params;

    const data = await fetchProductData(product);

    return (
        <>
            <Navbar navbarBg="white" />
            <main>
                <ProductPage product={data} />
            </main>
        </>
    );
}
