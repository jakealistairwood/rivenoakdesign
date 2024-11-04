import { fetchPageData } from "@/sanity/api";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import Navbar from "@/components/globals/Navbar";

export default async function About() {
  const data = await fetchPageData("about");

  return (
    <>
        <Navbar navbarBg="default" />
        <main>
            <LayoutRenderer page={data} />
        </main>
    </>
  )
}