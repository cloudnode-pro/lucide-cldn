import {Icon} from "../Icon.js";

export class ChevronsLeftRightEllipsis extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8 22 12 18 16M6 8 2 12 6 16M16 12"/></svg>`
        ).node);
    }
}
