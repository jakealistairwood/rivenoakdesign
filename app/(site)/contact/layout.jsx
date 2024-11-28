import React from "react"
import { fetchPageSEOData } from "@/sanity/api"

export async function generateMetadata({ params }) {
    const { seoData } = await fetchPageSEOData("/contact")
  
    return {
      title: seoData?.title,
      description: seoData?.description,
    }
}

export default async function ContactLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}