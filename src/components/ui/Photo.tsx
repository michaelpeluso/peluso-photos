interface PhotoProps {
    url: string;
    alt?: string;
    label?: string;
    onClick?: () => void;
    clickable?: boolean;
}

export const Photo = ({ url, alt, label, onClick, clickable = true }: PhotoProps) => {
    if (!clickable) {
        return (
            <div className="w-full aspect-square overflow-hidden">
                <img src={url} alt={alt || label || "photo"} className="w-full h-full object-cover" loading="lazy" />
            </div>
        );
    }

    return (
        <div className="group relative w-full aspect-square overflow-hidden cursor-pointer" onClick={onClick}>
            <img src={url} alt={alt || label || "photo"} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102" loading="lazy" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
            {label && (
                <div className="absolute inset-0 flex items-center justify-center px-2">
                    <span className="text-white text-sm md:text-base font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-250 text-center break-words">{label}</span>
                </div>
            )}
        </div>
    );
};
