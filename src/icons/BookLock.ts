import {Icon} from "../Icon.js";

export class BookLock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6V4A2 2 0 1 0 14 4V6M20 15V21A1 1 0 0 1 19 22H6.5A1 1 0 0 1 6.5 17H20"/><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H10"/><rect width="8" height="5" x="12" y="6" rx="1"/></svg>`
        ).node);
    }
}
