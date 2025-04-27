import {Icon} from "../Icon.js";

export class LocateOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><path d="M7.1 7.1A7 7 0 0 0 5 12 7 7 0 0 0 12 19 7 7 0 0 0 16.9 16.9M18.7 14Q19 13 19 12A7 7 0 0 0 10 5.3"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
