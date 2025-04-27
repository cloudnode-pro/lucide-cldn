import {Icon} from "../Icon.js";

export class Users extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21V19A4 4 0 0 0 12 15H6A4 4 0 0 0 2 19V21"/><circle cx="9" cy="7" r="4"/><path d="M22 21V19A4 4 0 0 0 19 15.1M16 3.1A4 4 0 0 1 16 11"/></svg>`
        ).node);
    }
}
