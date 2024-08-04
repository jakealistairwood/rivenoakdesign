import { page } from "./schemas/page";
import { sections } from "./schemas/sections";
import { components } from "./schemas/components";
import { masthead } from "./schemas/masthead";
import { sectionHeader } from "./schemas/sectionHeader";

export const schema = {
    types: [page, sections, components, masthead, sectionHeader],
};
