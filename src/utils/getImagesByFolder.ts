// Usage: import { getImagesByFolder } from "utils/getImagesByFolder"
// const weddingImages = getImagesByFolder("weddings");

type ImageObj = { url: string; alt: string };

const imageImports: Record<string, () => Promise<{ images: ImageObj[] }>> = {
    "coming-soon": () => import("../data/coming-soon-images"),
    landing: () => import("../data/landing-images"),
    showcase: () => import("../data/showcase-images"),
    main_cars: () => import("../data/main_cars-images"),
    main_headshots: () => import("../data/main_headshots-images"),
    "main_couples-and-families": () => import("../data/main_couples-and-families-images"),
    main_grads: () => import("../data/main_grads-images"),
    main_personal: () => import("../data/main_personal-images"),
    main_pets: () => import("../data/main_pets-images"),
    "main_private-events": () => import("../data/main_private-events-images"),
    main_weddings: () => import("../data/main_weddings-images"),
};

export async function getImagesByFolder(folder: string): Promise<ImageObj[]> {
    if (!imageImports[folder]) throw new Error(`No images found for folder: ${folder}`);
    const mod = await imageImports[folder]();
    return mod.images;
}
