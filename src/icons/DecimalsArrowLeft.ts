import {Icon} from "../Icon.js";

export class DecimalsArrowLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 21 10 18 13 15M20 18H10M3 11"/><rect width="5" height="8" x="6" y="3" rx="2.5"/></svg>`
        ).node);
    }
}
