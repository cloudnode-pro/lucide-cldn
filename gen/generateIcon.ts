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
import Handlebars from "handlebars";
import path from "node:path";
import {optimiseSvg} from "./optimiseSvg.js";

/**
 * Generate an icon class based from the given path to an SVG.
 */
export async function generateIcon(filePath: string) {
    const copyrightStart = 2025;
    const copyrightEnd = new Date().getFullYear();

    const name = path.basename(filePath, path.extname(filePath))
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    const svg = (await optimiseSvg(await fs.readFile(filePath, "utf8"))).data;
    await fs.writeFile(
        path.join("src", "icons", name + ".ts"),
        Handlebars.compile(
            await fs.readFile(path.join("gen", "Icon.ts.mustache"), "utf8"),
            {noEscape: true},
        )({name, svg, copyrightStart, copyrightEnd}));
    return name;
}
