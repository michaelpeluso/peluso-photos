import { Hero } from "../sections/Hero";
import { Introduction } from "../sections/Introduction";

import WithOppositeTheme from "../hooks/WithOppositeTheme";
import { AboutMe } from "../sections/AboutMe";
import { PhotoGridSection } from "../sections/PhotoGridSection";

export default function ComingSoon() {
    return (
        <>
            <WithOppositeTheme>
                <Hero />
            </WithOppositeTheme>
            <Introduction />
            <AboutMe />
            <PhotoGridSection
                folder="showcase"
                title="Portrait Showcase"
                description="A collection of expressive portrait styles—from studio setups to natural lighting. Each image reflects a different mood, tone, or story."
                ctaText="Book a Portrait Session"
                ctaHref="#contact"
                maxRows={3}
                showLabels={true}
            />
            <PhotoGridSection
                folder="main_personal"
                title="Creative Portraits"
                description="A collection of expressive portrait styles—from studio setups to natural lighting. Each image reflects a different mood, tone, or story."
                ctaText="Book a Portrait Session"
                ctaHref="#contact"
                maxRows={3}
            />
        </>
    );
}
