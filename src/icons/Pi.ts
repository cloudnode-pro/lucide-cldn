import {Icon} from "../Icon.js";

export class Pi extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="9" x2="9" y1="4" y2="20"/><path d="M4 7A3 3 0 0 1 7 4H20"/><path d="M18 20A3 3 0 0 1 15 17V4"/></svg>`
        ).node);
    }
}
