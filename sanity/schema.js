import { page } from "./schemas/page";
import { sections } from "./schemas/sections";
import { components } from "./schemas/components";
import { masthead } from "./schemas/masthead";
import { sectionHeader } from "./schemas/sectionHeader";
import { products } from "./schemas/products";
import { productsCarousel } from "./schemas/productsCarousel";
import { tabbedSlider } from "./schemas/tabbedSlider";
import { timedSlider } from "./schemas/timedSlider";
import { stackedCards } from "./schemas/stackedCards";
import { twoColTextAsset } from "./schemas/twoColTextAsset";
import { scrollableImage } from "./schemas/scrollableImage";
import { threeColCards } from "./schemas/threeColCards";
import { imageGrid } from "./schemas/imageGrid";
import { textImageGrid } from "./schemas/textImageGrid";

export const schema = {
    types: [
        page,
        sections,
        components,
        masthead,
        sectionHeader,
        products,
        productsCarousel,
        tabbedSlider,
        timedSlider,
        stackedCards,
        twoColTextAsset,
        scrollableImage,
        threeColCards,
        imageGrid,
        textImageGrid,
        // Add more schema types as needed...
    ],
};
