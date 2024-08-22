import React from "react";
import { motion } from "framer-motion";

const Tabs = ({ tabs, setActiveIndex, activeIndex }) => {
    return (
        <menu className="flex items-center justify-center bg-[#F2F2F2] rounded-xl w-fit mx-auto mt-20 py-3 px-4">
            {tabs?.map((tab, i) => (
                <li className="relative" key={`tab-label-${i}`}>
                    <button className={`uppercase font-heading tracking-[0.21em] px-8 py-4 rounded-[7px] relative z-[2] ${activeIndex === i ? "text-white" : "text-black/80"} transition-all duration-200 ease`} onClick={() => setActiveIndex(i)} type="button">{tab}</button>
                    {activeIndex === i && (
                        <motion.div
                            layoutId="activeTab"
                            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                            className="absolute inset-0 bg-carbon-grey rounded-[7px] z-[1]"
                        />
                    )}
                </li>
            ))}
        </menu>
    )
}

export default Tabs;