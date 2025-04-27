import {Icon} from "../Icon.js";

export class Inbox extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.5 5.1 2 12V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V12L18.6 5.1A2 2 0 0 0 16.8 4H7.2A2 2 0 0 0 5.5 5.1"/></svg>`
        ).node);
    }
}
