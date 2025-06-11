import { useForm, ValidationError } from "@formspree/react";

const formId = import.meta.env.VITE_FORM_ID;
if (!formId) {
    throw new Error("VITE_FORM_ID environment variable is not set. Please set it to your Formspree form ID.");
}

const sessionTypes = ["Portrait", "Wedding/Engagement", "Family", "Event", "Corporate/Headshot", "Product", "Real Estate", "Other"];

export default function ContactForm() {
    const [state, handleSubmit] = useForm(formId);

    if (state.succeeded) {
        return <p className="text-green-500">Thanks for reaching out! I'll get back to you soon.</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto p-4 bg-white rounded-xl shadow">
            {/* Basic Info */}
            <div>
                <label htmlFor="name" className="font-bold">
                    Full Name
                </label>
                <input id="name" name="name" type="text" className="border p-2 rounded w-full" />
            </div>
            <div>
                <label htmlFor="email" className="font-bold">
                    Your Email *
                </label>
                <input id="email" name="email" type="email" required className="border p-2 rounded w-full" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
                <label htmlFor="phone" className="font-bold">
                    Phone Number
                </label>
                <input id="phone" name="phone" type="tel" className="border p-2 rounded w-full" />
            </div>

            {/* How did you hear about me? */}
            <div>
                <label htmlFor="referral" className="font-bold">
                    How did you hear about me?
                </label>
                <select id="referral" name="referral" className="border p-2 rounded w-full">
                    <option value="">-- Select --</option>
                    <option value="Google/Search">Google/Search</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Repeat Client">Repeat Client</option>
                    <option value="Flyer/Business Card">Flyer/Business Card</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="referralDetail" className="font-bold">
                    If "Other", please specify:
                </label>
                <input id="referralDetail" name="referralDetail" type="text" className="border p-2 rounded w-full" />
            </div>

            {/* Type of Photography */}
            <div>
                <label htmlFor="sessionType" className="font-bold">
                    Type of Session
                </label>
                <select id="sessionType" name="sessionType" className="border p-2 rounded w-full">
                    <option value="">-- Select --</option>
                    {sessionTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="otherType" className="font-bold">
                    If "Other", please specify
                </label>
                <input id="otherType" name="otherType" type="text" className="border p-2 rounded w-full" />
            </div>

            {/* Event Details */}
            <div>
                <label htmlFor="eventDate" className="font-bold">
                    Preferred Date/Deadline
                </label>
                <input id="eventDate" name="eventDate" type="date" className="border p-2 rounded w-full" />
            </div>
            <div>
                <label htmlFor="eventTime" className="font-bold">
                    Preferred Time
                </label>
                <input id="eventTime" name="eventTime" type="time" className="border p-2 rounded w-full" />
            </div>
            <div>
                <label htmlFor="location" className="font-bold">
                    Location (Address or General Area)
                </label>
                <input id="location" name="location" type="text" className="border p-2 rounded w-full" />
            </div>
            <div>
                <label htmlFor="guests" className="font-bold">
                    Number of People Attending
                </label>
                <input id="guests" name="guests" type="number" min={1} className="border p-2 rounded w-full" />
            </div>
            <div>
                <label htmlFor="duration" className="font-bold">
                    Estimated Session Duration (hours)
                </label>
                <input id="duration" name="duration" type="number" min={0.5} step={0.5} className="border p-2 rounded w-full" />
            </div>

            {/* Booking Urgency */}
            <div>
                <label htmlFor="urgency" className="font-bold">
                    How soon are you hoping to book?
                </label>
                <select id="urgency" name="urgency" className="border p-2 rounded w-full">
                    <option value="">-- Select --</option>
                    <option value="ASAP">ASAP</option>
                    <option value="This Month">This Month</option>
                    <option value="Within 3 Months">Within 3 Months</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                    <option value="Just Looking for Info">Just Looking for Info</option>
                </select>
            </div>

            {/* Photography Goals */}
            <div>
                <label htmlFor="vision" className="font-bold">
                    What are you hoping to capture?
                </label>
                <textarea id="vision" name="vision" className="border p-2 rounded w-full" rows={2} />
            </div>
            <div>
                <label htmlFor="examples" className="font-bold">
                    Links to Example Photos/Styles You Like
                </label>
                <input id="examples" name="examples" type="text" className="border p-2 rounded w-full" placeholder="URLs, Pinterest, Instagram, etc." />
            </div>
            <div>
                <label htmlFor="inspiration" className="font-bold">
                    Do you have a Pinterest board or gallery for inspiration? (Link)
                </label>
                <input id="inspiration" name="inspiration" type="url" className="border p-2 rounded w-full" placeholder="https://..." />
            </div>
            <div>
                <label htmlFor="mustHaveShots" className="font-bold">
                    Are there any must-have shots or moments you want captured?
                </label>
                <textarea id="mustHaveShots" name="mustHaveShots" className="border p-2 rounded w-full" rows={2} />
            </div>
            <div>
                <label htmlFor="usage" className="font-bold">
                    How will you use the photos?
                </label>
                <input id="usage" name="usage" type="text" className="border p-2 rounded w-full" placeholder="Personal, business, prints, social media..." />
            </div>

            {/* Photo Delivery Format */}
            <div>
                <label htmlFor="delivery" className="font-bold">
                    Preferred Photo Delivery Format
                </label>
                <select id="delivery" name="delivery" className="border p-2 rounded w-full">
                    <option value="">-- Select --</option>
                    <option value="Digital Download">Digital Download</option>
                    <option value="USB Drive">USB Drive</option>
                    <option value="Physical Prints">Physical Prints</option>
                    <option value="Album/Book">Album/Book</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
            </div>

            {/* Budget & Scheduling */}
            <div>
                <label htmlFor="budget" className="font-bold">
                    Estimated Budget
                </label>
                <input id="budget" name="budget" type="text" className="border p-2 rounded w-full" />
            </div>
            <div>
                <label htmlFor="timeline" className="font-bold">
                    Do you have a specific deadline for photo delivery?
                </label>
                <input id="timeline" name="timeline" type="text" className="border p-2 rounded w-full" />
            </div>
            <div>
                <label htmlFor="contactMethod" className="font-bold">
                    Preferred Contact Method
                </label>
                <select id="contactMethod" name="contactMethod" className="border p-2 rounded w-full">
                    <option value="">-- Select --</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text</option>
                </select>
            </div>
            <div>
                <label htmlFor="bestTime" className="font-bold">
                    Best Time to Contact
                </label>
                <input id="bestTime" name="bestTime" type="text" className="border p-2 rounded w-full" placeholder="Mornings, evenings, weekends, etc." />
            </div>

            {/* Social Media */}
            <div>
                <label htmlFor="instagram" className="font-bold">
                    Instagram handle (if you want to connect):
                </label>
                <input id="instagram" name="instagram" type="text" className="border p-2 rounded w-full" placeholder="@yourhandle" />
            </div>

            {/* Permissions */}
            <div>
                <label className="font-bold">May I share some of your photos on my website or social media?</label>
                <div className="flex gap-4 mt-1">
                    <label>
                        <input type="radio" name="sharePermission" value="Yes" className="mr-2" />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="sharePermission" value="No" className="mr-2" />
                        No
                    </label>
                    <label>
                        <input type="radio" name="sharePermission" value="Ask me first" className="mr-2" />
                        Ask me first
                    </label>
                </div>
            </div>

            {/* Special Requests */}
            <div>
                <label htmlFor="accommodations" className="font-bold">
                    Do you or your guests have any special needs or accommodations?
                </label>
                <textarea id="accommodations" name="accommodations" className="border p-2 rounded w-full" rows={2} />
            </div>
            <div>
                <label htmlFor="allergies" className="font-bold">
                    Any allergies, sensitivities, or mobility considerations we should know about?
                </label>
                <textarea id="allergies" name="allergies" className="border p-2 rounded w-full" rows={2} />
            </div>

            {/* Newsletter */}
            <div>
                <label className="font-bold">Would you like to receive occasional updates or promotions?</label>
                <div className="flex gap-4 mt-1">
                    <label>
                        <input type="radio" name="newsletter" value="Yes" className="mr-2" />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="newsletter" value="No" className="mr-2" />
                        No
                    </label>
                </div>
            </div>

            {/* Professional Experience */}
            <div>
                <label htmlFor="experience" className="font-bold">
                    Have you worked with a professional photographer before?
                </label>
                <select id="experience" name="experience" className="border p-2 rounded w-full">
                    <option value="">-- Select --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div>
                <label htmlFor="photographerValue" className="font-bold">
                    What do you value most in a photographer?
                </label>
                <input id="photographerValue" name="photographerValue" type="text" className="border p-2 rounded w-full" />
            </div>

            {/* General Message */}
            <div>
                <label htmlFor="message" className="font-bold">
                    Anything else you'd like to share? *
                </label>
                <textarea id="message" name="message" required className="border p-2 rounded w-full" rows={3} />
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
