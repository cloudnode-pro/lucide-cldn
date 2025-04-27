import {Icon} from "../Icon.js";

export class ArrowRightToLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12H3M11 18 17 12 11 6M21 5V19"/></svg>`
        ).node);
    }
}
