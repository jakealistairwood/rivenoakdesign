import { fetchGlobalOptions, fetchPageData, fetchFAQs } from "@/sanity/api";
import dynamic from "next/dynamic";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import Navbar from "@/components/globals/Navbar";
import CTA from "@/components/globals/CTA";

const FAQs = dynamic(() => import("@/components/globals/FAQs"));

export default async function Home() {
  const data = await fetchPageData("/");
  const globalOptions = await fetchGlobalOptions();
  const faqs = await fetchFAQs();

  const hideCTA = data?.hide_global_cta;
  const hideFAQs = data?.hide_faqs;

  return (
    <>
      <Navbar navbarBg="default" />
      <main>
        <LayoutRenderer page={data} globalOptions={globalOptions} />
        {!hideFAQs && <FAQs faqs={faqs} faqOptions={globalOptions?.faq_block} />}
        {!hideCTA && <CTA {...globalOptions?.cta_block} />}
      </main>
    </>
  )
}