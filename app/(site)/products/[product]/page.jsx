import React from "react";
import { fetchProductData } from "@/sanity/api";
import ProductPage from "@/components/pages/ProductPage";

export default async function Product({ params }) {
    const { product } = params;

    const data = await fetchProductData(product);

    return (
        <main>
            <ProductPage product={data} />
        </main>
    );
}
