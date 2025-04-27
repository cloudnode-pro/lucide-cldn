import {Icon} from "../Icon.js";

export class MailX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V18Q2.2 19.8 4 20H13"/><path d="M22 7 13 12.7A2 2 0 0 1 11 12.7L2 7M17 17 21 21M21 17 17 21"/></svg>`
        ).node);
    }
}
