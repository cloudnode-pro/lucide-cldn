import {Icon} from "../Icon.js";

export class LockKeyholeOpen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7A5 5 0 0 1 16.3 4.5"/></svg>`
        ).node);
    }
}
