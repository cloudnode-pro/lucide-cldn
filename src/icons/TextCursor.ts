import {Icon} from "../Icon.js";

export class TextCursor extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 22H16A4 4 0 0 1 12 18V6A4 4 0 0 1 16 2H17M7 22H8A4 4 0 0 0 12 18V17M7 2H8A4 4 0 0 1 12 6V7"/></svg>`
        ).node);
    }
}
