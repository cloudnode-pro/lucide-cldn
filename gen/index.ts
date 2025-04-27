import {generateIcons} from "./generateIcons.js";
import {generateIndex} from "./generateIndex.js";
import {generateReadme} from "./generateReadme.js";

await generateReadme();
const icons = await generateIcons();
await generateIndex(icons);
