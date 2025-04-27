import {Icon} from "../Icon.js";

export class ChevronsDownUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 20 12 15 17 20M7 4 12 9 17 4"/></svg>`
        ).node);
    }
}
