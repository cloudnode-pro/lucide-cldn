import {Icon} from "../Icon.js";

export class ArrowRightFromLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5V19M21 12H7M15 18 21 12 15 6"/></svg>`
        ).node);
    }
}
