import {Icon} from "../Icon.js";

export class BookImage extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13.7 17.9 11.6A2 2 0 0 0 15.1 11.6L9.7 17"/><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H19A1 1 0 0 1 20 3V21A1 1 0 0 1 19 22H6.5A1 1 0 0 1 6.5 17H20"/><circle cx="10" cy="8" r="2"/></svg>`
        ).node);
    }
}
