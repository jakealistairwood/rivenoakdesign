import React from "react"
import { fetchPageSEOData } from "@/sanity/api"

export async function generateMetadata({ params }) {
    const { seoData } = await fetchPageSEOData("/about")
  
    return {
      title: seoData?.title,
      description: seoData?.description,
    }
}

export default async function AboutLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}