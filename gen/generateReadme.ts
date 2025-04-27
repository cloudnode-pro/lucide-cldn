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

export async function generateReadme() {
    const lucideLicence = await fs.readFile(path.join("lucide", "LICENSE"), "utf8");
    await fs.writeFile(
        "README.md",
        Handlebars.compile(
            await fs.readFile(path.join("gen", "README.md.mustache"), "utf8"),
            {noEscape: true},
        )({
            lucideLicence: lucideLicence.replace(/[\r\n]+$/, ""),
        }));
}
