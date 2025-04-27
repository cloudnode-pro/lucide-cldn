import {Icon} from "../Icon.js";

export class ChevronsRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 17 11 12 6 7M13 17 18 12 13 7"/></svg>`
        ).node);
    }
}
