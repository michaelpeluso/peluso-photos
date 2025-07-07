import { useEffect, useRef } from "react";
import { SecondaryButton } from "./SecondaryButton";

interface ModalProps {
    url: string | null;
    onClose: () => void;
}

export default function Modal({ url, onClose }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (url && dialog && !dialog.open) {
            dialog.showModal();
        } else {
            dialog?.close();
        }
    }, [url]);

    if (!url) return null;

    return (
        <dialog
            ref={dialogRef}
            onClick={onClose}
            className="fixed inset-0 z-50 m-0 p-0 border-none w-full h-full open:flex items-center justify-center bg-transparent overflow-hidden"
            style={{
                padding: 0,
                margin: 0,
                border: "none",
                maxWidth: "100vw",
                maxHeight: "100vh",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                inset: "0",
            }}
        >
            {/* Dark background */}
            <div className="absolute inset-0 bg-black/70 transition-opacity duration-200 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-10">
                {/* Focused image */}
                <div className="relative z-10 max-w-[90vw] max-h-[90vh] p-2 md:p-4 transition-transform duration-300">
                    <img src={url} alt="Expanded view" className="w-full h-full max-h-[90vh] object-contain cursor-pointer" onClick={onClose} />
                </div>

                {/* Buttons */}
                <div className="mt-4 flex justify-center gap-4 text-white">
                    <SecondaryButton href={url}>View More</SecondaryButton>
                </div>
            </div>
        </dialog>
    );
}
