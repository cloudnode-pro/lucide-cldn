import {Icon} from "../Icon.js";

export class User extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V19A4 4 0 0 0 15 15H9A4 4 0 0 0 5 19V21"/><circle cx="12" cy="7" r="4"/></svg>`
        ).node);
    }
}
