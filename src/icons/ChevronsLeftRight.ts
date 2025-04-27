import {Icon} from "../Icon.js";

export class ChevronsLeftRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 7 4 12 9 17M15 7 20 12 15 17"/></svg>`
        ).node);
    }
}
