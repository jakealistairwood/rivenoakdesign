import React, { useState } from "react";
import { checkPropertyExists } from "@/utils/helpers";

const Accordion = ({ accordion_items }) => {
    const renderAccordion = accordion_items && accordion_items.length > 0;
    return (
        renderAccordion && (
            <div
                className="accordion flex flex-col mt-12 md:mt-20"
                aria-multiselectable
                role="tablist"
            >
                {accordion_items?.map((accordion, i) => (
                    <AccordionItem
                        key={`accordion-item-${accordion?._key}`}
                        {...accordion}
                        index={i}
                    />
                ))}
            </div>
        )
    );
};

export default Accordion;

const AccordionItem = ({ heading, content, index }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="accordion__item max-w-[760px] w-full mx-auto border-b border-black/10">
            <h3 className="accordion__header flex items-center justify-between py-6 text-[1.25rem]">
                <button
                    className="w-full text-left font-medium"
                    id={`accordion-header-${index}`}
                    type="button"
                    onClick={() => setAccordionOpen(!accordionOpen)}
                >
                    {heading}
                </button>
                <div className="min-w-[24px] max-w-[24px] w-full aspect-[1/1] flex items-center justify-center">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`!w-full ${accordionOpen ? "rotate-180" : "rotate-0"} origin-center transition-transform duration-200`}
                    >
                        <path
                            d="M26.7071 12.7076L16.7071 22.7076C16.6142 22.8005 16.5039 22.8743 16.3825 22.9246C16.2611 22.975 16.131 23.0009 15.9996 23.0009C15.8682 23.0009 15.738 22.975 15.6166 22.9246C15.4952 22.8743 15.385 22.8005 15.2921 22.7076L5.29208 12.7076C5.10444 12.5199 4.99902 12.2654 4.99902 12.0001C4.99902 11.7347 5.10444 11.4802 5.29208 11.2926C5.47972 11.1049 5.73422 10.9995 5.99958 10.9995C6.26494 10.9995 6.51944 11.1049 6.70708 11.2926L15.9996 20.5863L25.2921 11.2926C25.385 11.1997 25.4953 11.126 25.6167 11.0757C25.7381 11.0254 25.8682 10.9995 25.9996 10.9995C26.131 10.9995 26.2611 11.0254 26.3825 11.0757C26.5039 11.126 26.6142 11.1997 26.7071 11.2926C26.8 11.3855 26.8737 11.4958 26.924 11.6172C26.9743 11.7386 27.0001 11.8687 27.0001 12.0001C27.0001 12.1315 26.9743 12.2616 26.924 12.383C26.8737 12.5044 26.8 12.6147 26.7071 12.7076Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </h3>
            <div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
                className="accordion__panel"
                hidden={accordionOpen ? false : true}
            >
                <p className="font-body text-black-80">{content}</p>
                <div className="min-h-8" />
            </div>
        </div>
    );
};
