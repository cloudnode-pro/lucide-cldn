import {Icon} from "../Icon.js";

export class Calendar1 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 14H12V18M16 2V6M3 10H21M8 2V6"/><rect width="18" height="18" x="3" y="4" rx="2"/></svg>`
        ).node);
    }
}
