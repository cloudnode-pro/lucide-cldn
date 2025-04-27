import {Icon} from "../Icon.js";

export class ArrowLeftRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3 4 7 8 11M4 7H20M16 21 20 17 16 13M20 17H4"/></svg>`
        ).node);
    }
}
