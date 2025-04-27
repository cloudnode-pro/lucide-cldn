import {Icon} from "../Icon.js";

export class BookKey extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 3 20 4M20 2 15.5 6.5M20 7.9V21A1 1 0 0 1 19 22H6.5A1 1 0 0 1 6.5 17H20"/><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H14.3"/><circle cx="14" cy="8" r="2"/></svg>`
        ).node);
    }
}
