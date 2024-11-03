import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { checkPropertyExists } from "@/utils/helpers";
import { PortableText } from "next-sanity";

const AboutUs = ({ masthead, content }) => {
    const { heading, description, image } = masthead;
    return (
        <>
            <section className="bg-walnut pt-[164px] text-white relative">
                <div className="max-w-[630px] w-full mx-auto flex flex-col gap-y-4 items-center text-center pb-[7.5rem]">
                    <h1 className="font-serif text-[10rem] leading-[100%]">{heading}</h1>
                    {checkPropertyExists(description) && <p className="max-w-[62ch]" dangerouslySetInnerHTML={{ __html: description}} />}
                </div>
            </section>
            {/* {image?.asset && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 z-[2] w-full max-w-[1280px] aspect-[1280/555]">
                    <Image src={urlFor(image?.asset)} alt={image?.alt_text} fill className="object-contain w-full" priority placeholder={image?.placeholder} />
                </div>
            )} */}
            <section className="relative bg-white text-black py-[7.5rem]">
                <article className="max-w-[62ch] w-full mx-auto flex flex-col gap-y-10">
                    {checkPropertyExists(content?.heading) && (
                        <h2 className="text-[1.65rem] font-serif" dangerouslySetInnerHTML={{ __html: content?.heading }} />
                    )}
                    <div className="prose lg:prose-lg">
                        <PortableText value={content?.body} />
                    </div>
                </article>
            </section>
        </>
    )
}

export default AboutUs;