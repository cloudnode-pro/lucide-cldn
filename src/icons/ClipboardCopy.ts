import {Icon} from "../Icon.js";

export class ClipboardCopy extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M8 4H6A2 2 0 0 0 4 6V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V18M16 4H18A2 2 0 0 1 20 6V10M21 14H11"/><path d="M15 10 11 14 15 18"/></svg>`
        ).node);
    }
}
