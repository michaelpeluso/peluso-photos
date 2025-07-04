import { useEffect, useRef, useState } from "react";
import { SecondaryButton } from "../ui/SecondaryButton";

const ACTIONS = [
    { label: "See my latest work", href: "#portfolio" },
    { label: "Book a session", href: "#contact" },
    { label: "About me", href: "#about" },
];

export const Introduction = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.6 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative flex flex-col items-center justify-center py-24 min-h-[40vh] body bg-[var(--theme-background)] text-[var(--theme-foreground)]">
            {/* Welcome Message */}
            <h2
                className={`font-title text-4xl md:text-6xl mb-6 transition-opacity transition-transform duration-500 ease-out
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
                Welcome.
            </h2>

            {/* Quick Pitch */}
            <p
                className={`text-lg md:text-2xl font-body mb-12 text-center transition-opacity transition-transform duration-500 delay-100 ease-out
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
            >
                NJ-based photographer for weddings, portraits, and more.
            </p>

            <div
                className={`flex flex-col md:flex-row items-start justify-center gap-16 mt-4 w-full max-w-4xl
        transition-opacity transition-transform duration-500 delay-[250ms] ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
            >
                {/* Left Body Text */}
                <div className="max-w-md text-base md:text-lg font-body text-left text-[var(--theme-muted-foreground)]">
                    I specialize in turning moments into timeless images — whether it’s a wedding, a quiet portrait session, or a lively party. Let’s create something beautiful together.
                </div>

                {/* Right CTA Links */}
                <div className="flex flex-col items-start gap-4">
                    {ACTIONS.map((a, i) => (
                        <SecondaryButton key={a.label} href={a.href} delay={0.4 + i * 0.1} show={inView}>
                            {a.label}
                        </SecondaryButton>
                    ))}
                </div>
            </div>
        </section>
    );
};
