import { execSync } from "child_process";

// List all your Cloudinary folders here
const FOLDERS = [
    //
    "coming-soon",
    "showcase",
    "landing",
    "main_cars",
    "main_headshots",
    "main_couples-and-families",
    "main_grads",
    "main_personal",
    "main_pets",
    "main_private-events",
    "main_weddings",
];

for (const folder of FOLDERS) {
    console.log(`\nUpdating images for folder: ${folder}`);
    try {
        execSync(`npm run update:images ${folder}`, { stdio: "inherit" });
    } catch (err) {
        console.error(`Failed to update images for folder: ${folder} \n`, err);
        process.exit(1);
    }
}
console.log("\nAll image files updated.");
