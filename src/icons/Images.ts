import {Icon} from "../Icon.js";

export class Images extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 22H4A2 2 0 0 1 2 20V6"/><path d="M22 13 20.7 11.7A2.4 2.4 0 0 0 17.3 11.7L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>`
        ).node);
    }
}
