import React, { useState } from "react";

const SHINE_ANIMATION = `
@keyframes shine {
  0% { left: -100%; opacity: 1; }
  100% { left: 150%; opacity: 1; }
}
`;

const PRIMARY_BUTTON_TEXT_TRANSITION = `
.primary-button-text {
  transition: color 0.3s cubic-bezier(.5,1.5,.67,.67);
}
`;

export function PrimaryButton({ children, className = "", ...props }: React.ComponentPropsWithoutRef<"a">) {
    const [shining, setShining] = useState(false);

    const triggerShine = () => {
        setShining(false);
        setTimeout(() => setShining(true), 10);
    };

    return (
        <a
            {...props}
            className={`
        relative inline-block text-lg font-semibold uppercase tracking-wide
        border
        bg-transparent
        px-8 py-3
        transition-colors duration-150
        outline-none rounded-none
        overflow-hidden
        focus-visible:text-[var(--theme-primary-button-text-focus)]
        hover:text-[var(--theme-primary-button-text-hover)]
        text-[var(--theme-primary-button-text)]
        border-[var(--theme-primary-button-border)]
        ${className}
      `}
            onMouseEnter={triggerShine}
            onFocus={triggerShine}
            onAnimationEnd={() => setShining(false)}
            tabIndex={0}
            style={{ WebkitTapHighlightColor: "transparent" }}
        >
            <span
                className="primary-button-text relative z-10"
                style={{
                    color: shining ? "var(--theme-primary-button-text-hover)" : "var(--theme-primary-button-text)",
                }}
            >
                {children}
            </span>
            {/* Shine effect: solid color, theme-driven */}
            <span
                aria-hidden
                className={`
          pointer-events-none absolute top-0 bottom-0 z-0
          ${shining ? "animate-shine" : ""}
        `}
                style={{
                    left: "-100%",
                    width: "60%",
                    height: "100%",
                    background: "var(--theme-primary-button)",
                    transform: "skewX(-20deg)",
                }}
            />
            <style>
                {`
          ${SHINE_ANIMATION}
          ${PRIMARY_BUTTON_TEXT_TRANSITION}
          .animate-shine {
            animation: shine 0.75s cubic-bezier(.35,1.5,.67,.67) forwards;
          }
        `}
            </style>
        </a>
    );
}
