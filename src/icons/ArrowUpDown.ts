import {Icon} from "../Icon.js";

export class ArrowUpDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 16 17 20 13 16M17 20V4M3 8 7 4 11 8M7 4V20"/></svg>`
        ).node);
    }
}
