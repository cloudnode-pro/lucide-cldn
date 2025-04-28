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

function formatBytes(bytes: number): string {
    const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (bytes === 0) return '0 bytes';

    const exponent = Math.floor(Math.log10(Math.abs(bytes)) / 3);
    const unit = units[Math.min(exponent, units.length - 1)];
    const value = bytes / Math.pow(1000, exponent);

    const decimals = value >= 10 ? 0 : 1;
    return `${value.toFixed(decimals)} ${unit}`;
}

export async function generateIcons() {
    await fs.rm(path.join("src", "icons"), {recursive: true, force: true});
    await fs.mkdir(path.join("src", "icons"), {recursive: true});
    const dir = path.join("lucide", "icons");
    const files = (await fs.readdir(dir, {withFileTypes: true}))
        .filter(de => de.isFile() && path.extname(de.name) === ".svg")
        .map(de => path.join(dir, de.name));

    const results: string[] = [];
    let rawSize = 0;
    let optimisedSize = 0;

    const concurrency = 10;
    const queue = files.map(file => () => generateIcon(file));
    const workers = Array.from({length: concurrency}, async () => {
        while (queue.length > 0) {
            const next = queue.shift();
            if (next != null) {
                const {name, raw, optimised} = await next();
                results.push(name);
                rawSize += raw;
                optimisedSize += optimised;
            }
        }
    });

    await Promise.all(workers);
    const optimisation = Math.round((optimisedSize / rawSize) * 10000) / 100;
    console.log(`Generated ${results.length} icon${results.length === 1 ? "" : "s"}`);
    console.log(
        `${formatBytes(rawSize)} → ${formatBytes(optimisedSize)}`,
        optimisation > 100
            ? "\x1b[31m"
            : optimisation < 100
            ? "\x1b[32m"
            : "",
        optimisation + "%",
        "\x1b[0m",
    );
    return results.sort((a, b) => a.localeCompare(b));
}
