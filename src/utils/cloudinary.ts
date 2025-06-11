export const fetchCloudinaryImages = async (folder: string) => {
    // Validate the folder name
    if (!folder || typeof folder !== "string") {
        throw new Error("Invalid folder name provided.");
    }

    // Ensure the Cloudinary cloud name is set in the environment variables
    const cloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    if (!import.meta.env.VITE_CLOUDINARY_CLOUD_NAME) {
        throw new Error("Cloudinary cloud name is not set in the environment variables.");
    }

    // Validate the folder name
    const res = await fetch(
        `https://res.cloudinary.com/${cloudinaryCloudName}/image/list/${folder}.json` // Fetch the list of images from the specified folder
    );
    const data = await res.json();
    return data.resources.map((img: { secure_url: string }) => img.secure_url); // Extract secure URLs from the response
};
