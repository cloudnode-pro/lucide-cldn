import {Icon} from "../Icon.js";

export class Mail extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M22 7 13 12.7A2 2 0 0 1 11 12.7L2 7"/></svg>`
        ).node);
    }
}
