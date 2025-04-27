import {Icon} from "../Icon.js";

export class ChevronsRightLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 17 15 12 20 7M4 17 9 12 4 7"/></svg>`
        ).node);
    }
}
