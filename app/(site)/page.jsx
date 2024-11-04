import { fetchGlobalOptions, fetchPageData } from "@/sanity/api";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import Navbar from "@/components/globals/Navbar";
import CTA from "@/components/globals/CTA";

export default async function Home() {
  const data = await fetchPageData("/");
  const globalOptions = await fetchGlobalOptions();

  return (
    <>
      <Navbar navbarBg="default" />
      <main>
        <LayoutRenderer page={data} globalOptions={globalOptions} />
        <CTA {...globalOptions?.cta_block} />
      </main>
    </>
  )
}