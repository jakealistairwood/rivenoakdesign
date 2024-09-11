// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// const ScrollableImage = ({ image, image_max_width }) => {
//     const containerRef = useRef(null);
//     return (
//         <div className="relative mt-20">
//             <div ref={containerRef} className="w-full relative aspect-[16/9] max-h-[85vh] max-w-[90vw] h-full mx-auto">
//                 <Image className="w-full h-full object-cover" src={urlFor(image?.asset)} fill alt="" />
//             </div>
//         </div>
//     )
// }

// export default ScrollableImage;

// components/FramerImage.tsx
import React, { useRef } from "react";
import { motion, useTransform, useScroll} from 'framer-motion';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function ScrollableImage({ image, image_max_width }) {
    const containerRef = useRef(null);

    // Track the scroll progress across the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    // Animate image scaling from 1 to 2 as the scroll progresses from 0 to 1
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.27]);

    // // Animate the image moving upwards (-50%) as the scroll progresses
    // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky overflow-hidden top-0 h-[100vh]">
                <motion.div
                    style={{ scale }}
                    className="w-full h-full flex items-center justify-center absolute inset-0"
                >   
                    <div className="relative w-[80vw] h-[80vh] rounded-lg">
                        <Image src={urlFor(image?.asset)} fill className="w-full h-full object-cover rounded-lg" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}