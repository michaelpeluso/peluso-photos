import ContactForm from "../components/ContactComingSoon";

export default function ComingSoon() {
    return (
        <div className="h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="mx-auto w-full px-8 py-8 flex items-center justify-between">
                <span className="text-xl font-bold tracking-tight text-black">peluso.photos</span>
            </header>

            {/* Main (grow/shrink to fill, no overflow) */}
            <main className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto w-full px-6 flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight">Coming Soon</h1>
                <p className="text-lg md:text-xl text-center text-neutral-800 max-w-lg">
                    My online portfolio will be launching soon. If you are looking to book a session with me, or just want some more information about my work, feel free to contact me via email or instagram.
                </p>
                {/* Social Links */}
                <ul className="flex gap-4">
                    <li>
                        <a
                            href="https://www.instagram.com/peluso.photos"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 transition"
                        >
                            {/* Instagram SVG */}
                            <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                                <rect width="24" height="24" rx="6" fill="currentColor" className="text-white" />
                                <rect x="3" y="3" width="18" height="18" rx="5" stroke="black" strokeWidth="2" fill="white" />
                                <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="2" fill="white" />
                                <circle cx="17" cy="7" r="1.2" fill="black" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:michael@peluso.photos" aria-label="Email" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 transition">
                            {/* Email SVG */}
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                                <rect width="24" height="24" rx="6" fill="white" />
                                <rect x="4" y="7" width="16" height="10" rx="2" stroke="black" strokeWidth="2" fill="white" />
                                <path d="M4 7l8 6 8-6" stroke="black" strokeWidth="2" />
                            </svg>
                        </a>
                    </li>
                </ul>
                {/* Email Signup */}
                <ContactForm />
            </main>
            {/* Footer */}
            <footer className="py-4 px-4 text-center text-sm text-neutral-400 bg-white border-t border-neutral-200">&copy; {new Date().getFullYear()} Peluso Photos &middot; All rights reserved.</footer>
        </div>
    );
}
