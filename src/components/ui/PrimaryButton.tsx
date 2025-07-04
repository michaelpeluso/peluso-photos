import React from "react";

const SHINE_ANIMATION = `
@keyframes shine {
  0% { left: -100%; opacity: 1; }
  100% { left: 150%; opacity: 1; }
}
.button-text {
  transition: color 0.3s cubic-bezier(.5,1.5,.67,.67);
}
`;

export function PrimaryButton({ children, className = "", ...props }: React.ComponentPropsWithoutRef<"a">) {
    const [shine, setShine] = React.useState(false);

    // Only animate the shine on hover/focus (not text color)
    const handleMouseEnter = () => {
        setShine(false);
        setTimeout(() => setShine(true), 10);
    };
    const handleMouseLeave = () => setShine(false);
    const handleFocus = () => handleMouseEnter();
    const handleBlur = () => setShine(false);

    return (
        <a
            {...props}
            className={`
        relative inline-block text-lg font-semibold tracking-wide
        border
        bg-transparent
        px-8 py-3
        transition-colors duration-200
        outline-none rounded-none
        overflow-hidden
        text-[var(--theme-button)]
        hover:text-[var(--theme-button-hover)]
        focus:text-[var(--theme-button-focus)]
        border-[var(--theme-button)]
        hover:border-[var(--theme-button-hover)]
        focus:border-[var(--theme-button-focus)]
        ${className}
      `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={0}
            style={{ WebkitTapHighlightColor: "transparent" }}
        >
            <span className="relative z-10">{children}</span>
            {/* Shine effect */}
            <span
                aria-hidden
                className={`
          pointer-events-none absolute top-0 bottom-0 z-0
          ${shine ? "animate-shine" : ""}
        `}
                style={{
                    left: "-100%",
                    width: "60%",
                    height: "100%",
                    background: "var(--theme-button)",
                    transform: "skewX(-20deg)",
                }}
                // Remove shine after animation completes, so it's ready for another hover
                onAnimationEnd={() => setShine(false)}
            />
            <style>
                {`
          ${SHINE_ANIMATION}
          .animate-shine {
            animation: shine 0.75s cubic-bezier(.35,1.5,.67,.67) forwards;
          }
        `}
            </style>
        </a>
    );
}
