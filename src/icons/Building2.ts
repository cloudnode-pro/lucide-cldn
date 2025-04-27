import {Icon} from "../Icon.js";

export class Building2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 22V4A2 2 0 0 1 8 2H16A2 2 0 0 1 18 4V22ZM6 12H4A2 2 0 0 0 2 14V20A2 2 0 0 0 4 22H6M18 9H20A2 2 0 0 1 22 11V20A2 2 0 0 1 20 22H18M10 6H14M10 10H14M10 14H14M10 18H14"/></svg>`
        ).node);
    }
}
