import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

interface PhotoProps {
    url: string;
    alt?: string;
    label?: string;
    clickable?: boolean;
}

export const Photo = ({ url, alt, label, clickable = true }: PhotoProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const animationClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

    if (!clickable) {
        return (
            <div ref={ref} className={`transition-all duration-700 ease-out ${animationClass}`}>
                <div className="w-full aspect-square overflow-hidden">
                    <img src={url} alt={alt || label || "photo"} className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>
        );
    }

    return (
        <>
            <div ref={ref} className={`transition-all duration-700 ease-out ${animationClass}`} onClick={() => setModalOpen(true)}>
                <div className="group relative w-full aspect-square overflow-hidden cursor-pointer" onClick={() => setModalOpen(true)}>
                    <img src={url} alt={alt || label || "photo"} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101" loading="lazy" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                    {label && (
                        <div className="absolute inset-0 flex items-center justify-center px-2">
                            <span className="text-white text-sm md:text-base font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-250 text-center break-words">{label}</span>
                        </div>
                    )}
                </div>
            </div>

            <Modal url={modalOpen ? url : null} onClose={() => setModalOpen(false)} />
        </>
    );
};
