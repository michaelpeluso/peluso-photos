import { useEffect, useState } from "react";
import { getImagesByFolder } from "../utils/getImagesByFolder";
import { ImageCrossfade } from "./ImageCrossfade";
import { PrimaryButton } from "./PrimaryButton"; // Place the above button in its own file

export const Hero = () => {
    const [images, setImages] = useState<{ url: string; alt: string }[]>([]);

    useEffect(() => {
        getImagesByFolder("coming-soon").then(setImages).catch(console.error);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {images.length > 0 && <ImageCrossfade images={images} interval={5000} />}
                <div className="absolute inset-0 bg-black/80" />
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-0">
                <h1 className="text-white text-[clamp(2.5rem,7vw,6rem)] font-extrabold tracking-tight mb-6 text-center font-title leading-tight" style={{ fontFamily: "var(--theme-font-title)" }}>
                    Peluso Photos
                </h1>
                <p className="text-white/80 text-lg md:text-2xl font-light mb-12 text-center max-w-2xl font-body tracking-wide" style={{ fontFamily: "var(--theme-font-body)" }}>
                    Capturing moments. Telling your story through light and lens.
                </p>
                <div className="flex flex-col md:flex-row gap-2 w-full max-w-md md:justify-center">
                    <PrimaryButton href="#contact">Contact Me</PrimaryButton>
                    <PrimaryButton href="#portfolio">View Portfolio</PrimaryButton>
                </div>
            </div>
        </section>
    );
};
