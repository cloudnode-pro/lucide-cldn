import {Icon} from "../Icon.js";

export class ContactRound extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2V4M18 22A6 6 0 0 0 6 22M8 2V4"/><circle cx="12" cy="12" r="4"/><rect width="18" height="18" x="3" y="4" rx="2"/></svg>`
        ).node);
    }
}
