import {Icon} from "../Icon.js";

export class DecimalsArrowRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18H20M17 21 20 18 17 15M3 11"/><rect width="5" height="8" x="15" y="3" rx="2.5"/><rect width="5" height="8" x="6" y="3" rx="2.5"/></svg>`
        ).node);
    }
}
