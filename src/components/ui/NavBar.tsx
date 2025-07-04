import { Link, useLocation } from "react-router-dom";
import WithOppositeTheme from "../hooks/WithOppositeTheme";

const NAV_LINKS = [
    { name: "Home", to: "/" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
];

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname === "/home";

    const ReactNode = (
        <>
            <nav className="absolute w-full flex items-center justify-between py-6 px-6 md:px-14 select-none z-50 text-[var(--theme-header)]" style={{ backgroundColor: isHome ? "transparent" : "var(--theme-background)" }}>
                <Link to="/">
                    <span className="text-xl font-bold tracking-wider">peluso.photos</span>
                </Link>
                <ul className="flex gap-2 md:gap-6">
                    {NAV_LINKS.map(({ name, to }) => (
                        <li key={name}>
                            <Link to={to} className={`navbar-link${location.pathname === to ? " active" : ""}`}>
                                {name}
                                <span className="navbar-underline" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );

    return isHome ? <WithOppositeTheme>{ReactNode}</WithOppositeTheme> : ReactNode;
}
