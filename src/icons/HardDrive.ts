import {Icon} from "../Icon.js";

export class HardDrive extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.5 5.1 2 12V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V12L18.6 5.1A2 2 0 0 0 16.8 4H7.2A2 2 0 0 0 5.5 5.1"/><line x1="6" x2="6" y1="16" y2="16"/><line x1="10" x2="10" y1="16" y2="16"/></svg>`
        ).node);
    }
}
