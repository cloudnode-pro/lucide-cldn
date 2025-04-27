import {Icon} from "../Icon.js";

export class UserCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21V19A4 4 0 0 0 12 15H6A4 4 0 0 0 2 19V21"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`
        ).node);
    }
}
