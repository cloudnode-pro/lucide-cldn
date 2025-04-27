import {Icon} from "../Icon.js";

export class MessageCircleOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.5 14.9A9 9 0 0 0 9.1 3.5M2 2 22 22M5.6 5.6A9 9 0 0 0 4 16L2 22 8 20A9 9 0 0 0 18.3 18.3"/></svg>`
        ).node);
    }
}
