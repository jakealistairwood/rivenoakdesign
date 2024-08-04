import { fetchPageData } from "@/sanity/api";
import LayoutRenderer from "@/layouts/LayoutRenderer";

export default async function Home() {
  const data = await fetchPageData("/");

  console.log(data);

  return (
    <main>
      <LayoutRenderer page={data} />
    </main>
  )
}