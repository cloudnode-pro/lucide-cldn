import {Icon} from "../Icon.js";

export class Mailbox extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17V9.5C2 7 4 5 6.5 5H18A4 4 0 0 1 22 9z"/><polyline points="15 9 18 9 18 11"/><path d="M6.5 5C9 5 11 7 11 9.5V17A2 2 0 0 1 9 19"/><line x1="6" x2="7" y1="10" y2="10"/></svg>`
        ).node);
    }
}
