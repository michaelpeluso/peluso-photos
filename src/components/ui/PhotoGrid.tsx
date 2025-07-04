import { useState } from "react";
import { Photo } from "./Photo";
import Modal from "./Modal";

interface PhotoGridItem {
    url: string;
    alt?: string;
    label?: string;
}

interface PhotoGridProps {
    images: PhotoGridItem[];
    clickable?: boolean;
}

export const PhotoGrid = ({ images, clickable = true }: PhotoGridProps) => {
    const [modalUrl, setModalUrl] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                {images.map((img) => (
                    <Photo key={img.url} url={img.url} alt={img.alt} label={img.label} clickable={clickable} onClick={() => setModalUrl(img.url)} />
                ))}
            </div>

            <Modal url={modalUrl} onClose={() => setModalUrl(null)} />
        </>
    );
};
