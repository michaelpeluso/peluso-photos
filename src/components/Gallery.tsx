import React, { useEffect, useState } from "react";
import { fetchCloudinaryImages } from "../utils/cloudinary";

const Gallery: React.FC = () => {
    const [photos, setPhotos] = useState<string[]>([]);

    useEffect(() => {
        fetchCloudinaryImages("portfolio").then(setPhotos);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((src, i) => (
                <img key={i} src={src} alt={`Photo ${i + 1}`} className="rounded shadow" />
            ))}
        </div>
    );
};

export default Gallery;
// This component fetches images from a Cloudinary folder and displays them in a responsive grid layout.
