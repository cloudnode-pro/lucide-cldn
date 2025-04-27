import {Icon} from "../Icon.js";

export class FileQuestion extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7z"/><path d="M9.1 9A3 3 0 0 1 14.9 10C15 12 12 13 12 13"/></svg>`
        ).node);
    }
}
