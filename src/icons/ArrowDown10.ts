import {Icon} from "../Icon.js";

export class ArrowDown10 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 16 7 20 11 16M7 20V4M17 10V4H15M15 10H19"/><rect width="4" height="6" x="15" y="14" ry="2"/></svg>`
        ).node);
    }
}
