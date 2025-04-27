import {Icon} from "../Icon.js";

export class Tent extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15 8.5 21M2 21H22"/></svg>`
        ).node);
    }
}
