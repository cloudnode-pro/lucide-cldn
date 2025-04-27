import {Icon} from "../Icon.js";

export class BookHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8.2A2 2 0 0 0 13.8 6 2 2 0 0 0 12 6.9 2 2 0 0 0 10.2 6 2 2 0 0 0 8 8.2Q8 9.2 8.7 9.8L12 13 15.3 9.9A2 2 0 0 0 16 8.2"/><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H19A1 1 0 0 1 20 3V21A1 1 0 0 1 19 22H6.5A1 1 0 0 1 6.5 17H20"/></svg>`
        ).node);
    }
}
