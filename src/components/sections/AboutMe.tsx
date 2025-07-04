import { useEffect, useRef, useState } from "react";

export const AboutMe = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative flex flex-col items-center justify-center px-6 md:px-0 py-24 bg-[var(--theme-background)] text-[var(--theme-foreground)]">
            {/* Section Title */}
            <h2
                className={`font-title text-4xl md:text-6xl mb-6 transition-all duration-500 ease-out
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
                About Me
            </h2>

            {/* Body Text */}
            <div
                className={`max-w-3xl text-lg md:text-xl font-body leading-relaxed text-center transition-all duration-500 delay-100 ease-out
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
            >
                I’m Michael, a New Jersey-based photographer with a passion for capturing real, raw, and beautiful moments. Whether it’s the joy of a wedding day, the quiet confidence in a portrait, or the energy of a celebration, I aim to preserve
                what makes your story yours.
                <br />
                <br />
                My approach is relaxed but intentional — I focus on natural light, authentic expression, and a clean visual style that reflects who you are. Outside of photography, I’m a software engineer, coffee enthusiast, and firm believer in
                doing meaningful work with great people.
            </div>
        </section>
    );
};
