import { fetchPageData } from "@/sanity/api";
import LayoutRenderer from "@/layouts/LayoutRenderer";
import Navbar from "@/components/globals/Navbar";

export default async function Home() {
  const data = await fetchPageData("/");

  return (
    <>
      <Navbar navbarBg="default" />
      <main>
        <LayoutRenderer page={data} />
      </main>
    </>
  )
}