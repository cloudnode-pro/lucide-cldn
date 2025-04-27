import {Icon} from "../Icon.js";

export class UserLock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7A4 4 0 0 0 3 19V21M15 15.5V14A2 2 0 0 1 19 14V15.5"/><rect width="8" height="5" x="13" y="16" rx="0.9"/></svg>`
        ).node);
    }
}
