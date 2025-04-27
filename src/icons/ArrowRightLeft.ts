import {Icon} from "../Icon.js";

export class ArrowRightLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3 20 7 16 11M20 7H4M8 21 4 17 8 13M4 17H20"/></svg>`
        ).node);
    }
}
