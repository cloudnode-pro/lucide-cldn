import {Icon} from "../Icon.js";

export class FileHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V6"/><path d="M14 2V6A2 2 0 0 0 16 8H20M10.3 10.7A2.4 2.4 0 0 0 7.6 10.2L6.8 10.7 6.5 11 6.1 10.7A2.4 2.4 0 0 0 3.5 10.2L2.7 10.7Q1.2 12.4 3 14.5L6.5 18 10.1 14.5C11.3 13.2 11.2 11.5 10.3 10.6"/></svg>`
        ).node);
    }
}
