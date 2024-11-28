import React from "react"
import { fetchPageSEOData } from "@/sanity/api"

export async function generateMetadata({ params }) {
    const { seoData } = await fetchPageSEOData("/products")
  
    return {
      title: seoData?.title,
      description: seoData?.description,
    }
}

export default async function ProductsLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}