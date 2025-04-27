import fs from "fs/promises";
import Handlebars from "handlebars";
import path from "node:path";

export async function generateReadme() {
    const lucideLicence = await fs.readFile(path.join("lucide", "LICENSE"), "utf8");
    await fs.writeFile(
        "README.md",
        Handlebars.compile(
            await fs.readFile(path.join("README.md.mustache"), "utf8"),
            {noEscape: true},
        )({
            lucideLicence: lucideLicence.replace(/[\r\n]+$/, ""),
        }));
}
