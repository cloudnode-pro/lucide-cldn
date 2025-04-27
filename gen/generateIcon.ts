import fs from "fs/promises";
import Handlebars from "handlebars";
import path from "node:path";
import {optimiseSvg} from "./optimiseSvg.js";

/**
 * Generate an icon class based from the given path to an SVG.
 */
export async function generateIcon(filePath: string) {
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
        )({name, svg}));
    return name;
}
