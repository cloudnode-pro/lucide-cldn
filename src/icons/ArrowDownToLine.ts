import {Icon} from "../Icon.js";

export class ArrowDownToLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17V3M6 11 12 17 18 11M19 21H5"/></svg>`
        ).node);
    }
}
