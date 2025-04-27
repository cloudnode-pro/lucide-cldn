import {Icon} from "../Icon.js";

export class AArrowUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.5 13H9.5M2 16 6.5 7 11 16M18 16V7M14 11 18 7 22 11"/></svg>`
        ).node);
    }
}
