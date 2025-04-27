import {Icon} from "../Icon.js";

export class MailOpen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.2 8.4Q22 9.1 22 10V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V10A2 2 0 0 1 2.8 8.4L10.8 2.4A2 2 0 0 1 13.2 2.4z"/><path d="M22 10 13 15.7A2 2 0 0 1 11 15.7L2 10"/></svg>`
        ).node);
    }
}
