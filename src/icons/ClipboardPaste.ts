import {Icon} from "../Icon.js";

export class ClipboardPaste extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 14H21M16 4H18A2 2 0 0 1 20 6V7.3M17 18 21 14 17 10"/><path d="M8 4H6A2 2 0 0 0 4 6V20A2 2 0 0 0 6 22H18A2 2 0 0 0 19.8 20.9"/><rect width="8" height="4" x="8" y="2" rx="1"/></svg>`
        ).node);
    }
}
