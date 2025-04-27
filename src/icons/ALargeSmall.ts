import {Icon} from "../Icon.js";

export class ALargeSmall extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 14H16M16 16V12.5A2.5 2.5 0 0 1 21 12.5V16M4.5 13H10.5M3 16 7.5 7 12 16"/></svg>`
        ).node);
    }
}
