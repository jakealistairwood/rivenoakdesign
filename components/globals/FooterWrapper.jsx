import React from "react";
import Footer from "./Footer";
import { fetchBasePages, fetchProductPages, fetchGlobalOptions } from "@/sanity/api";

const FooterWrapper = async () => {
    const basePages = await fetchBasePages();
    const productPages = await fetchProductPages();
    const { socials } = await fetchGlobalOptions();
    return (
        <>
            <Footer basePages={basePages} productPages={productPages} socials={socials} />
        </>
    )
}

export default FooterWrapper;