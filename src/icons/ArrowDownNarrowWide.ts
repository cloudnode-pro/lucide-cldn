import {Icon} from "../Icon.js";

export class ArrowDownNarrowWide extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 16 7 20 11 16M7 20V4M11 4H15M11 8H18M11 12H21"/></svg>`
        ).node);
    }
}
