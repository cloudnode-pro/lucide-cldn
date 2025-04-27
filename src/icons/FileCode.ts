import {Icon} from "../Icon.js";

export class FileCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12.5 8 15 10 17.5M14 12.5 16 15 14 17.5M14 2V6A2 2 0 0 0 16 8H20"/><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7z"/></svg>`
        ).node);
    }
}
