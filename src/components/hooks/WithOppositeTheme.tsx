import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface WithOppositeThemeProps {
    children: ReactNode;
}

export default function WithOppositeTheme({ children }: WithOppositeThemeProps) {
    const [oppositeTheme, setOppositeTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const currentTheme = document.body.getAttribute("data-theme");
        setOppositeTheme(currentTheme === "dark" ? "light" : "dark");
    }, []);

    return <div data-theme={oppositeTheme}>{children}</div>;
}
