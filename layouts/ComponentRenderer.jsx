import React from "react";
import dynamic from "next/dynamic";

import Masthead from "@/components/Masthead";

const SectionHeader = dynamic(() => import("@/components/SectionHeader"));

const ComponentRenderer = ({ components = [] }) => {
    const renderComponent = (type, props) => {
        const { key, ...otherProps } = props;

        const RenderedComponent = {
            masthead: Masthead,
            sectionHeader: SectionHeader,
        }[type]

        return RenderedComponent ? <RenderedComponent key={`${key}`} {...otherProps} /> : null;
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