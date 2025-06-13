import { useEffect, useState } from "react";
import { getImagesByFolder } from "../utils/getImagesByFolder";
import { ImageCrossfade } from "./ImageCrossfade";

export const Hero = () => {
    const [images, setImages] = useState<{ url: string; alt: string }[]>([]);

    useEffect(() => {
        getImagesByFolder("coming-soon") // Use the folder you want
            .then(setImages)
            .catch(console.error);
    }, []);

    return (
        <section className="relative isolate min-h-screen flex items-center justify-center px-6">
            {/* Crossfading images as background */}
            <div className="absolute inset-0 z-10">
                {images.length > 0 && <ImageCrossfade images={images} interval={5000} />}
                {/* Optional: gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                <h1 className="font-title text-white text-6xl md:text-8xl font-bold drop-shadow-lg tracking-tight mb-6">Peluso Photos</h1>
                <p className="text-white/90 text-lg md:text-2xl font-body mb-10 max-w-xl">Capturing moments. Telling your story through light and lens.</p>
                <div className="flex gap-6">
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-2xl bg-white/90 hover:bg-white transition text-black  text-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                        aria-label="Contact Me"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#portfolio"
                        className="px-8 py-3 rounded-2xl bg-black/60 hover:bg-black/80 border border-white/30 transition text-white  text-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
                        aria-label="View Portfolio"
                    >
                        View Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};
