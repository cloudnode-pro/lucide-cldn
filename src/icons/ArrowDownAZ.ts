import {Icon} from "../Icon.js";

export class ArrowDownAZ extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 16 7 20 11 16M7 20V4M20 8H15M15 10V6.5A2.5 2.5 0 0 1 20 6.5V10M15 14H20L15 20H20"/></svg>`
        ).node);
    }
}
