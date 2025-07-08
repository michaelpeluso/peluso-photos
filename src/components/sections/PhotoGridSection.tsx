// sections/PhotoGridSection.tsx
import { useEffect, useState } from "react";
import { PhotoGrid } from "../ui/PhotoGrid";
import { SecondaryButton } from "../ui/SecondaryButton";
import { getImagesByFolder } from "../../utils/getImagesByFolder";

interface PhotoGridSectionProps {
    folder: string; // Cloudinary folder
    title: string;
    description?: string;
    ctaText?: string;
    ctaHref: string;
    maxRows?: number;
    showLabels?: boolean;
}

export const PhotoGridSection = ({ folder, title, description, ctaText = "Book a Session", ctaHref, maxRows, showLabels = false }: PhotoGridSectionProps) => {
    const [images, setImages] = useState<{ url: string; alt: string }[]>([]);

    useEffect(() => {
        getImagesByFolder(folder).then(setImages).catch(console.error);
    }, [folder]);

    return (
        <section className="px-6 md:px-12 py-24 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
                {description && <p className="text-base md:text-lg text-[var(--theme-muted-foreground)]">{description}</p>}
                <div className="flex justify-center mt-4">
                    <SecondaryButton href={ctaHref}>{ctaText}</SecondaryButton>
                </div>
            </div>

            {/* Grid */}
            <PhotoGrid images={images} clickable={true} maxRows={maxRows} showLabels={showLabels} />
            {/* Repeated CTA below */}
            <div className="flex justify-center mt-8">
                <SecondaryButton href={ctaHref}>{ctaText}</SecondaryButton>
            </div>
        </section>
    );
};
