import {Icon} from "../Icon.js";

export class Strikethrough extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 4H9A3 3 0 0 0 6.2 8M14 12A4 4 0 0 1 14 20H6"/><line x1="4" x2="20" y1="12" y2="12"/></svg>`
        ).node);
    }
}
