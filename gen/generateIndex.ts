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
