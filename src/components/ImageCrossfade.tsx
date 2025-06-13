import React, { useEffect, useRef, useState } from "react";
export interface ImageCrossfadeProps {
    images: { url: string; alt: string }[];
    interval?: number;
}

export const ImageCrossfade: React.FC<ImageCrossfadeProps> = ({ images, interval = 5000 }) => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, images.length, interval]);

    return (
        <div className="absolute inset-0 w-full h-full">
            {images.map((img, idx) => (
                <img key={img.url} src={img.url} alt={img.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"}`} draggable={false} />
            ))}
            {/* Optional: add a dark overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 pointer-events-none" />
        </div>
    );
};
