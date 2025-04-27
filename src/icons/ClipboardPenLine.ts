import {Icon} from "../Icon.js";

export class ClipboardPenLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M8 4H6A2 2 0 0 0 4 6V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V19.5M16 4H18A2 2 0 0 1 19.7 5M8 18H9"/><path d="M21.4 12.6A1 1 0 0 0 18.4 9.6L14.4 13.6 13.9 14.5 13 17.4A.5.5 0 0 0 13.6 18L16.6 17 17.3 16.6z"/></svg>`
        ).node);
    }
}
