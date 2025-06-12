import { v2 as cloudinary } from "cloudinary";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const folder = process.argv[2] || "coming-soon"; // e.g. "weddings", "portraits", etc.
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const outputFile = path.resolve(__dirname, `../src/data/${folder.replace(/[^a-z0-9-]/gi, "_")}-images.ts`);
if (!folder) {
    console.error("Please provide a folder name as the first argument.");
    process.exit(1);
}

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error("Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env file.");
    process.exit(1);
}

async function main() {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
        api_key: process.env.CLOUDINARY_API_KEY!,
        api_secret: process.env.CLOUDINARY_API_SECRET!,
    });

    let next_cursor: string | undefined = undefined;
    const allImages: { url: string; alt: string }[] = [];
    do {
        const res = await cloudinary.search.expression(`folder:${folder}`).max_results(100).next_cursor(next_cursor).execute();
        for (const resource of res.resources) {
            allImages.push({
                url: resource.secure_url,
                alt: resource.public_id.split("/").pop() || "image",
            });
        }
        next_cursor = res.next_cursor;
    } while (next_cursor);

    const content = `// AUTO-GENERATED, DO NOT EDIT
export const images = ${JSON.stringify(allImages, null, 2)};
`;
    const outputDir = path.dirname(outputFile);
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputFile, content);

    console.log(`✅ Wrote ${allImages.length} images to ${outputFile}`);
}

main();
