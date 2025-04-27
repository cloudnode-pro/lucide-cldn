import {Icon} from "../Icon.js";

export class BookCopy extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 16V4A2 2 0 0 1 4 2H15"/><path d="M22 18H11A2 2 0 1 0 11 22H21.5L22 21.5V6.5L21.5 6H11A2 2 0 0 0 9 8V20M5 14H4A2 2 0 1 0 4 18H5"/></svg>`
        ).node);
    }
}
