import {Icon} from "../Icon.js";

export class MailQuestion extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10.5V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V18Q2.2 19.8 4 20H16.5"/><path d="M22 7 13 12.7A2 2 0 0 1 11 12.7L2 7M18 15.3Q18.3 14.6 18.9 14.3A2 2 0 0 1 21.5 14.7Q22 15.3 22 16C22 17.3 20 18 20 18M20 22"/></svg>`
        ).node);
    }
}
