import {Icon} from "../Icon.js";

export class BookHeadphones extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H19A1 1 0 0 1 20 3V21A1 1 0 0 1 19 22H6.5A1 1 0 0 1 6.5 17H20"/><path d="M8 12V10A4 4 0 0 1 16 10V12"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/></svg>`
        ).node);
    }
}
