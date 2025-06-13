import { v2 as cloudinary } from "cloudinary";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const folder = process.argv[2];
if (!folder) {
    console.error("Usage: npm run update:images <folder>");
    process.exit(1);
}

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const outputFile = path.resolve(__dirname, `../src/data/${folder.replace(/[^a-z0-9-]/gi, "_")}-images.ts`);

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error("Missing Cloudinary credentials in .env");
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

    const content = `// AUTO-GENERATED: Images from ${folder}
export const images = ${JSON.stringify(allImages, null, 2)};\n`;

    const outputDir = path.dirname(outputFile);
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputFile, content);

    console.log(`Wrote ${allImages.length} images to ${outputFile}`);
}

main();
