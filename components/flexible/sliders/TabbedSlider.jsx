import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import Tabs from "./components/Tabs";

const TabbedSlider = ({ groups }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const tabs = groups.map((group) => group?.tab_label);

    return (
        <LayoutGroup>
            <div className="flex flex-col">
                <Tabs 
                    tabs={tabs} 
                    setActiveIndex={setActiveIndex}
                    activeIndex={activeIndex} 
                />
                <Slider
                    groups={groups}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    direction={direction}
                    setDirection={setDirection}
                />
            </div>
        </LayoutGroup>
    )
}

export default TabbedSlider;

const Slider = () => {

}