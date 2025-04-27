import {Icon} from "../Icon.js";

export class FileOutput extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2V6A2 2 0 0 0 16 8H20M4 7V4A2 2 0 0 1 6 2 2 2 0 0 0 4 4"/><path d="M4 21A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7L15 2H6M5 11 2 14"/><path d="M5 17 2 14H12"/></svg>`
        ).node);
    }
}
