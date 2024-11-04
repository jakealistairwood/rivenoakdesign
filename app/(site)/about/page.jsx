import { fetchPageData, fetchGlobalOptions } from "@/sanity/api";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import Navbar from "@/components/globals/Navbar";
import dynamic from "next/dynamic";

const CTA = dynamic(() => import("@/components/globals/CTA"));

export default async function About() {
  const data = await fetchPageData("about");

  const globalOptions = await fetchGlobalOptions();
  const hideCTA = data?.hide_global_cta;

  return (
    <>
        <Navbar navbarBg="default" />
        <main>
            <LayoutRenderer page={data} />
            {!hideCTA && <CTA {...globalOptions?.cta_block} />}
        </main>
    </>
  )
}