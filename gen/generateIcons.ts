import fs from "fs/promises";
import path from "node:path";
import {generateIcon} from "./generateIcon.js";

export async function generateIcons() {
    const dir = path.join("lucide", "icons");
    const files = (await fs.readdir(dir, {withFileTypes: true}))
        .filter(de => de.isFile() && path.extname(de.name) === ".svg")
        .map(de => path.join(dir, de.name));

    const results: string[] = [];

    const concurrency = 10;
    const queue = files.map(file => () => generateIcon(file));
    const workers = Array.from({length: concurrency}, async () => {
        while (queue.length > 0) {
            const next = queue.shift();
            if (next != null)
                results.push(await next());
        }
    });

    await Promise.all(workers);
    return results;
}
