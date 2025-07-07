// Usage: import { getImagesByFolder } from "utils/getImagesByFolder"
// const weddingImages = getImagesByFolder("weddings");

type ImageObj = { url: string; alt: string };

// Add your folder names here as you add them!
const imageImports: Record<string, () => Promise<{ images: ImageObj[] }>> = {
    // weddings: () => import("../data/weddings-images"),
    // portraits: () => import("../data/portraits-images"),
    "coming-soon": () => import("../data/coming-soon-images"),
    portraits_showcase: () => import("../data/portraits_showcase-images"),
    portraits_personal: () => import("../data/portraits_personal-images"),
    events: () => import("../data/events-images"),
};

export async function getImagesByFolder(folder: string): Promise<ImageObj[]> {
    if (!imageImports[folder]) throw new Error(`No images found for folder: ${folder}`);
    const mod = await imageImports[folder]();
    return mod.images;
}
