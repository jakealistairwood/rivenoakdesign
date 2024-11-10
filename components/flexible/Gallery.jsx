import React, { useState } from "react";
import { RowsPhotoAlbum, RenderImageProps, RenderImageContext } from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css"
import { urlFor } from "@/sanity/lib/image";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";

const Gallery = ({ gallery, productTitle }) => {
    const [index, setIndex] = useState(-1);
    let photos = [];

    gallery.map((item, i) => photos.push({
        src: urlFor(item?.asset),
        width: 1000,
        height: 1000,
        blurDataURL: item?.blurURL,
        alt_text: `${productTitle} image ${i}`
    }))

    return (
        <div className="flex flex-col gap-y-12 md:gap-y-20">
            <h2 className="text-center font-serif font-regular -tracking-[0.02em] leading-[1] ~text-[3rem]/[4.5rem]">Product Gallery</h2>
            
            <div className="w-full">
                <RowsPhotoAlbum 
                    photos={photos} 
                    targetRowHeight={500} 
                    onClick={({ index: current }) => setIndex(current)} 
                    render={{
                        image: renderNextImage
                    }}
                />
            </div>
            <Lightbox index={index} slides={photos} open={index >= 0} close={() => setIndex(-1)} />
        </div>
    )
}

export default Gallery;

const renderNextImage = (RenderImageProps, { photo }) => {
    return (
        <button type="button" className="aspect-[1/1] relative w-full">
            <Image 
                src={photo?.src}
                alt={photo?.alt_text}
                fill
                placeholder={photo?.blurDataURL || undefined}
            />
        </button>
    )
}