import {Icon} from "../Icon.js";

export class UserSearch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7A4 4 0 0 0 3 19V21"/><circle cx="17" cy="17" r="3"/><path d="M21 21 19.1 19.1"/></svg>`
        ).node);
    }
}
