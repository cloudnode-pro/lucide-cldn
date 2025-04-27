import {Icon} from "../Icon.js";

export class Move3d extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3V19H21M5 19 11 13"/><path d="M2 6 5 3 8 6M18 16 21 19 18 22"/></svg>`
        ).node);
    }
}
