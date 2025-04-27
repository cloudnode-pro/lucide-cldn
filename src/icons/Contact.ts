import {Icon} from "../Icon.js";

export class Contact extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2V4M7 22V20A2 2 0 0 1 9 18H15A2 2 0 0 1 17 20V22M8 2V4"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="4" rx="2"/></svg>`
        ).node);
    }
}
