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

/**
 * @param icons Names of icons.
 */
export async function generateIndex(icons: string[]) {
    await fs.writeFile(
        path.join("src", "icons", "index.ts"),
        Handlebars.compile(
            await fs.readFile(path.join("gen", "index.ts.mustache"), "utf8"),
            {noEscape: true},
        )({icons}),
    );
}
