import {Icon} from "../Icon.js";

export class FileScan extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10V7L15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H10"/><path d="M14 2V6A2 2 0 0 0 16 8H20M16 14A2 2 0 0 0 14 16M20 14A2 2 0 0 1 22 16M20 22A2 2 0 0 0 22 20M16 22A2 2 0 0 1 14 20"/></svg>`
        ).node);
    }
}
