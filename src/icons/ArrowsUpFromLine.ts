import {Icon} from "../Icon.js";

export class ArrowsUpFromLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6 7 3 10 6M7 17V3M14 6 17 3 20 6M17 17V3M4 21H20"/></svg>`
        ).node);
    }
}
