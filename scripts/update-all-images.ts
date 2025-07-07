import { execSync } from "child_process";

// List all your Cloudinary folders here
const FOLDERS = ["coming-soon", "portraits_showcase", "portraits_personal", "events"];

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
