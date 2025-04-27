import {Icon} from "../Icon.js";

export class SwissFranc extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 21V3H18M6 16H15M10 9.5H17"/></svg>`
        ).node);
    }
}
