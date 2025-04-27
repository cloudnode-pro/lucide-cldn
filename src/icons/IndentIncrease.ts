import {Icon} from "../Icon.js";

export class IndentIncrease extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12H11M21 18H11M21 6H11M3 8 7 12 3 16"/></svg>`
        ).node);
    }
}
