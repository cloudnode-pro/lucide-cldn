import {Icon} from "../Icon.js";

export class ArrowDownZA extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 16 7 20 11 16M7 4V20M15 4H20L15 10H20M15 20V16.5A2.5 2.5 0 0 1 20 16.5V20M20 18H15"/></svg>`
        ).node);
    }
}
