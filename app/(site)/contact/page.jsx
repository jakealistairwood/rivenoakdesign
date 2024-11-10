import { fetchPageData, fetchGlobalOptions, fetchFAQs } from "@/sanity/api";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import Navbar from "@/components/globals/Navbar";
import dynamic from "next/dynamic";

const CTA = dynamic(() => import("@/components/globals/CTA"));
const FAQs = dynamic(() => import("@/components/globals/FAQs"));

export default async function Contact() {
  const data = await fetchPageData("/contact");

  const globalOptions = await fetchGlobalOptions();
  const contactDetails = globalOptions?.contactDetails;
  const faqs = await fetchFAQs();
  const hideCTA = data?.hide_global_cta;
  const hideFAQs = data?.hide_faqs;

  return (
    <>
        <Navbar navbarBg="white" />
        <main>
            <LayoutRenderer page={data} contactDetails={contactDetails} />
            {!hideFAQs && <FAQs faqs={faqs} faqOptions={globalOptions?.faq_block} />}
            {!hideCTA && <CTA {...globalOptions?.cta_block} overrideCTAUrl={data?.overwrite_global_cta_url} overwrittenUrl={data?.global_cta_url} />}
        </main>
    </>
  )
}