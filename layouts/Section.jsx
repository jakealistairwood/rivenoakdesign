import React, { memo } from "react";
import ComponentRenderer from "./ComponentRenderer";

const Section = memo((props) => {
    const { components = [] } = props;

    return (
        <section>
            <div className="container">
                <ComponentRenderer components={components} />
            </div>
            <h2>as</h2>
        </section>
    )
})

export default Section;