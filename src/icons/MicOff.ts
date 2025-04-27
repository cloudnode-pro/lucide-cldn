import {Icon} from "../Icon.js";

export class MicOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="2" x2="22" y1="2" y2="22"/><path d="M18.9 13.2 19 12V10M5 10V12A7 7 0 0 0 17 17M15 9.3V5A3 3 0 0 0 9.3 3.7"/><path d="M9 9V12A3 3 0 0 0 14.1 14.1"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`
        ).node);
    }
}
