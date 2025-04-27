/*
 * Copyright © 2025 Cloudnode OÜ.
 *
 * This file is part of lucide-cldn.
 *
 * lucide-cldn is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General
 * Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * lucide-cldn is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with lucide-cldn.
 * If not, see <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */
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
    return results.sort((a, b) => a.localeCompare(b));
}
