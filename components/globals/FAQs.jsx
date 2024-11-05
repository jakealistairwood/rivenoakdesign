"use client"

import React, { useState } from "react";
import SectionHeader from "../flexible/SectionHeader";
import Accordion from "../flexible/Accordion";

const FAQs = ({ faqOptions, faqs }) => {
    const { sectionHeader } = faqOptions;

    let accordion_items = [];

    faqs.forEach((faq, i) => accordion_items.push({
        _key: faq?._id,
        heading: faq?.question,
        content: faq?.answer,
    }));

    console.log(accordion_items);

    return (
        <section className="relative bg-white text-black">
            <div className="container py-20 md:py-[120px]" id="faqs">
                <SectionHeader {...sectionHeader} />
                <Accordion accordion_items={accordion_items} />
            </div>
        </section>
    )
}

export default FAQs;