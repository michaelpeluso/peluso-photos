import { useEffect, useState } from "react";
import { Photo } from "./Photo";

interface PhotoGridItem {
    url: string;
    alt?: string;
    label?: string;
    showLabels?: boolean;
}

type ColumnBreakpoints = Partial<{
    base: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
}>;

interface PhotoGridProps {
    images: PhotoGridItem[];
    clickable?: boolean;
    columns?: number | ColumnBreakpoints;
    maxRows?: number;
    showLabels?: boolean;
}

// Tailwind breakpoints in px
const breakpoints = {
    base: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

export const PhotoGrid = ({ images, clickable = true, columns = { base: 1, sm: 2, md: 3, lg: 4 }, maxRows, showLabels = false }: PhotoGridProps) => {
    const [columnCount, setColumnCount] = useState<number>(typeof columns === "number" ? columns : columns.base ?? 1);

    useEffect(() => {
        if (typeof columns === "number") {
            setColumnCount(columns);
            return;
        }

        const handleResize = () => {
            const width = window.innerWidth;

            const sorted = Object.entries(breakpoints).sort(([, a], [, b]) => b - a); // biggest to smallest
            for (const [key, minWidth] of sorted) {
                if (width >= minWidth && columns[key as keyof ColumnBreakpoints]) {
                    setColumnCount(columns[key as keyof ColumnBreakpoints]!);
                    return;
                }
            }

            // fallback to base if nothing matched
            setColumnCount(columns.base ?? 1);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [columns]);

    const getColumnClasses = () => {
        if (typeof columns === "number") {
            return `grid-cols-${columns}`;
        }

        const classList = [];

        if (columns.base) classList.push(`grid-cols-${columns.base}`);
        if (columns.sm) classList.push(`sm:grid-cols-${columns.sm}`);
        if (columns.md) classList.push(`md:grid-cols-${columns.md}`);
        if (columns.lg) classList.push(`lg:grid-cols-${columns.lg}`);
        if (columns.xl) classList.push(`xl:grid-cols-${columns.xl}`);
        if (columns["2xl"]) classList.push(`2xl:grid-cols-${columns["2xl"]}`);

        return classList.join(" ");
    };

    const maxItems = maxRows ? columnCount * maxRows : undefined;
    const displayedImages = maxItems ? images.slice(0, maxItems) : images;

    return (
        //<div className={`grid ${getColumnClasses()} gap-4 sm:gap-6 w-full`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full`}>
            {displayedImages.map((img) => (
                <div key={img.url} className="w-full">
                    {showLabels && img.label ? ( // show label
                        <Photo url={img.url} alt={img.alt} label={img.label} clickable={clickable} />
                    ) : (
                        <Photo url={img.url} alt={img.alt} clickable={clickable} />
                    )}
                </div>
            ))}
        </div>
    );
};
