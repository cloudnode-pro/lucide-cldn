import {Icon} from "../Icon.js";

export class ArrowLeftFromLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 6 3 12 9 18M3 12H17M21 19V5"/></svg>`
        ).node);
    }
}
