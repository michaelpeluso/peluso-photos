import { useForm, ValidationError } from "@formspree/react";

const formId = import.meta.env.VITE_FORM_ID;
if (!formId) {
    throw new Error("VITE_FORM_ID environment variable is not set. Please set it to your Formspree form ID.");
}

export default function ContactForm() {
    const [state, handleSubmit] = useForm(formId);

    if (state.succeeded) {
        return <p className="text-green-500">Thanks for reaching out! I'll get back to you soon.</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Name */}
                <div className="flex-1">
                    <input id="name" name="name" type="text" required className="border p-2 rounded w-full" placeholder="Your name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                {/* Email */}
                <div className="flex-1">
                    <input id="email" name="email" type="email" required className="border p-2 rounded w-full" placeholder="Your email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>
            {/* General Message */}
            <div>
                <textarea id="message" name="message" required className="border p-2 rounded w-full" rows={3} placeholder="Let's plan a shoot!" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={state.submitting} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                {state.submitting ? "Sending..." : "Send"}
            </button>

            <ValidationError errors={state.errors} />
        </form>
    );
}
