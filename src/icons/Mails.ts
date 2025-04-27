import {Icon} from "../Icon.js";

export class Mails extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="13" x="6" y="4" rx="2"/><path d="M22 7 14.9 10.8A2 2 0 0 1 13.1 10.8L6 7M2 8V19Q2.2 20.8 4 21H18"/></svg>`
        ).node);
    }
}
