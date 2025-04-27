import {Icon} from "../Icon.js";

export class ChevronsUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 11 12 6 7 11M17 18 12 13 7 18"/></svg>`
        ).node);
    }
}
