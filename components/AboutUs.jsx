import React from "react";
import { checkPropertyExists } from "@/utils/helpers";
import { PortableText } from "next-sanity";

const AboutUs = ({ masthead, content }) => {
    const { heading, description } = masthead;

    return (
        <>
            <section className="bg-walnut pt-[164px] text-white relative">
                <div className="max-w-[630px] w-full mx-auto flex flex-col gap-y-4 items-center text-center pb-20 md:pb-[7.5rem]">
                    <h1 className="font-serif ~text-[5rem]/[10rem] leading-[100%]">{heading}</h1>
                    {checkPropertyExists(description) && <p className="max-w-[62ch]" dangerouslySetInnerHTML={{ __html: description}} />}
                </div>
            </section>
            <section className="relative bg-white text-black py-20 md:py-[7.5rem]">
                <article className="max-w-[62ch] w-full mx-auto flex flex-col gap-y-10 pl-4">
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