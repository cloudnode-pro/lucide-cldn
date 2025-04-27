import {Icon} from "../Icon.js";

export class ChevronsLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17 6 12 11 7M18 17 13 12 18 7"/></svg>`
        ).node);
    }
}
