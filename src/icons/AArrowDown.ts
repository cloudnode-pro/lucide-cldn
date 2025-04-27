import {Icon} from "../Icon.js";

export class AArrowDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.5 13H9.5M2 16 6.5 7 11 16M18 7V16M14 12 18 16 22 12"/></svg>`
        ).node);
    }
}
