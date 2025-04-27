import {Icon} from "../Icon.js";

export class BusFront extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6 2 7M10 6H14M22 7 20 6"/><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11H20M6 19V21M18 21V19"/></svg>`
        ).node);
    }
}
