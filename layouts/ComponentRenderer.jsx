import React from "react";
import dynamic from "next/dynamic";

import Masthead from "@/components/Masthead";

const SectionHeader = dynamic(() => import("@/components/flexible/SectionHeader"));
const ProductsCarousel = dynamic(() => import("@/components/flexible/ProductsCarousel"));
const TabbedSlider = dynamic(() => import("@/components/flexible/sliders/TabbedSlider"));
const TimedSlider = dynamic(() => import("@/components/flexible/sliders/TimedSlider"));
const StackedCards = dynamic(() => import("@/components/flexible/StackedCards"));
const TwoColTextAsset = dynamic(() => import("@/components/flexible/TwoColTextAsset"));
const ScrollableImage = dynamic(() => import("@/components/flexible/ScrollableImage"));
const ThreeColCards = dynamic(() => import("@/components/flexible/ThreeColCards"));
const ImageGrid = dynamic(() => import("@/components/flexible/ImageGrid"));
const TextImageGrid = dynamic(() => import("@/components/flexible/TextImageGrid"));
const Accordion = dynamic(() => import("@/components/flexible/Accordion"));

const ComponentRenderer = ({ components = [], backgroundColor }) => {
    const renderComponent = (type, props) => {
        const { key, ...otherProps } = props;

        const RenderedComponent = {
            masthead: Masthead,
            sectionHeader: SectionHeader,
            productsCarousel: ProductsCarousel,
            tabbedSlider: TabbedSlider,
            timedSlider: TimedSlider,
            stackedCards: StackedCards,
            twoColTextAsset: TwoColTextAsset,
            scrollableImage: ScrollableImage,
            threeColCards: ThreeColCards,
            imageGrid: ImageGrid,
            textImageGrid: TextImageGrid,
            accordion: Accordion,
        }[type]

        return RenderedComponent ? <RenderedComponent key={`${key}`} {...otherProps} backgroundColor={backgroundColor} /> : null;
    }
    return (
        <>
            {components?.map((component, i) => {
                const componentType = component?._type;
                const key = component?._key;

                return renderComponent(componentType, { ...component, key, i } )
            })}
        </>
    )
}

export default ComponentRenderer;