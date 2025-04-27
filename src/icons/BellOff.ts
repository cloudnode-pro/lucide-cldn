import {Icon} from "../Icon.js";

export class BellOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21A2 2 0 0 0 13.7 21M17 17H4A1 1 0 0 1 3.3 15.3C4.6 14 6 12.5 6 8L6.3 6.3M2 2 22 22M8.7 3A6 6 0 0 1 18 8Q18.2 12 19.7 14"/></svg>`
        ).node);
    }
}
