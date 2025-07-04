import { useEffect, useState } from "react";
import { getImagesByFolder } from "../../utils/getImagesByFolder";
import { ImageCrossfade } from "../hooks/ImageCrossfade";
import { PrimaryButton } from "../ui/PrimaryButton";

export const Hero = () => {
    const [images, setImages] = useState<{ url: string; alt: string }[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        getImagesByFolder("coming-soon").then(setImages).catch(console.error);
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[var(--theme-background)] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 transition-all duration-1000">
                {images.length > 0 && <ImageCrossfade images={images} interval={5000} />}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-0 text-[var(--theme-foreground)]">
                {/* Title */}
                <h1
                    className={`header text-[clamp(2.5rem,7vw,6rem)] font-extrabold tracking-tight mb-6 text-center leading-tight
                        transition-all duration-[1200ms] ease-out
                        ${mounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}`}
                >
                    Peluso Photos
                </h1>

                {/* Subtitle */}
                <p
                    className={`subheader text-lg md:text-2xl font-light mb-12 text-center max-w-2xl tracking-wide
                        transition-all duration-500 delay-200 ease-out
                        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                >
                    Capturing moments that tell your story.
                </p>

                {/* Buttons */}
                <div
                    className={`flex flex-col md:flex-row gap-3 w-full max-w-md md:justify-center
                         duration-500 delay-400 ease-out
                        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                >
                    <PrimaryButton href="#contact">Contact Me</PrimaryButton>
                    <PrimaryButton href="#portfolio">View Portfolio</PrimaryButton>
                </div>
            </div>
        </section>
    );
};
