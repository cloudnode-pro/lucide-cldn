import {Icon} from "../Icon.js";

export class FileKey2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V10"/><path d="M14 2V6A2 2 0 0 0 16 8H20"/><circle cx="4" cy="16" r="2"/><path d="M10 10 5.5 14.5M9 11 10 12"/></svg>`
        ).node);
    }
}
