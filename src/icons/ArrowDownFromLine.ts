import {Icon} from "../Icon.js";

export class ArrowDownFromLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 3H5M12 21V7M6 15 12 21 18 15"/></svg>`
        ).node);
    }
}
