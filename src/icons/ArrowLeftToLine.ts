import {Icon} from "../Icon.js";

export class ArrowLeftToLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 19V5M13 6 7 12 13 18M7 12H21"/></svg>`
        ).node);
    }
}
