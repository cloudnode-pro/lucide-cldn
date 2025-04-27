import {Icon} from "../Icon.js";

export class ClipboardPen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4H18A2 2 0 0 1 20 6V20A2 2 0 0 1 18 22H12.5M4 13.5V6A2 2 0 0 1 6 4H8"/><path d="M13.4 15.6A1 1 0 1 0 10.4 12.6L5.4 17.6 4.9 18.5 4 21.4A.5.5 0 0 0 4.6 22L7.6 21 8.3 20.6z"/></svg>`
        ).node);
    }
}
