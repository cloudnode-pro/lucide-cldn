import {Icon} from "../Icon.js";

export class BellPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21A2 2 0 0 0 13.7 21M15 8H21M18 5V11M20 14.5 20.7 15.3A1 1 0 0 1 20 17H4A1 1 0 0 1 3.3 15.3C4.6 14 6 12.5 6 8A6 6 0 0 1 14.8 2.7"/></svg>`
        ).node);
    }
}
