// components/ui/SecondaryButton.tsx

interface SecondaryButtonProps {
    href: string;
    children: React.ReactNode;
    delay?: number;
    show?: boolean; // for animation trigger (e.g., inView)
}

export const SecondaryButton = ({ href, children, delay = 0, show = true }: SecondaryButtonProps) => {
    return (
        <a
            href={href}
            className={`group flex items-center gap-2 font-medium text-lg border-b pb-1 transition-all duration-300 hover:text-accent hover:border-accent`}
            style={{
                transitionDelay: show ? `${delay}s` : "0s",
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(-18px)",
            }}
        >
            {children}
            <span className="relative ml-1 transition-transform duration-300 group-hover:translate-x-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5" aria-hidden="true">
                    <path d="M6 11h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </a>
    );
};
