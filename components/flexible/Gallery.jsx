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

    console.log(`this is the gallery component:`, photos);

    return (
        <div className="flex flex-col gap-y-12 md:gap-y-20">
            <h2 className="text-center font-serif font-regular -tracking-[0.02em] leading-[1] ~text-[3rem]/[4.5rem]">Product Gallery</h2>
            
            <div className="w-full">
                <RowsPhotoAlbum 
                    photos={photos} 
                    targetRowHeight={500} 
                    onClick={({ index: current }) => setIndex(current)} 
                    // render={{
                    //     image: (props) => <Image {...props} width={500} height={500} />,
                    // }}
                    // render={{
                    //     photo: ({ onClick }, { photo, index }) => (
                    //         <CustomPhoto photo={photo} setIndex={setIndex} index={index} />
                    //     )
                    // }}
                    render={{
                        image: renderNextImage
                    }}
                    // render={{
                    //     image: () => {
                    //         photos.map((photo, i) => (
                    //             <div className="relative aspect-[1/1]">
                    //                 <Image key={`gallery-image-${i}`} {...photo} fill className="object-cover w-fill" placeholder={photo?.blurDataURL} alt={photo?.alt_text} />
                    //             </div>
                    //         ))
                    //     }
                    // }}
                />
            </div>
            <Lightbox index={index} slides={photos} open={index >= 0} close={() => setIndex(-1)} />
        </div>
    )
}

export default Gallery;

const CustomPhoto = ({ onClick, photo, setIndex, index }) => {
    console.log(onClick);
    return (
        <button type="button" onClick={() => setIndex(index)} className="react-photo-album--photo react-photo-album--button">
            <Image src={photo?.src} alt={photo?.alt_text} height={500} width={500} className="w-full object-cover react-photo-album--image" placeholder={photo?.blurDataURL} />
        </button>
    )
}


const renderNextImage = (RenderImageProps, { photo }) => {
    return (
        <button type="button" onClick={() => setIndex(index + 1)} className="aspect-[1/1] relative w-full">
            <Image 
                src={photo?.src}
                alt={photo?.alt_text}
                fill
                placeholder={photo?.blurDataURL || undefined}
            />
        </button>
    )
}