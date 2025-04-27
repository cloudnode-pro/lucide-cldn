import {Icon} from "../Icon.js";

export class PhoneOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 13.3A16 16 0 0 0 14 16L15.4 14.6A2 2 0 0 1 17.4 14.2L20.4 14.9A2 2 0 0 1 22 16.9V19.9A2 2 0 0 1 19.8 21.9 20 20 0 0 1 11.2 18.9 19 19 0 0 1 7.9 16.1M5.2 12.7A20 20 0 0 1 2.2 4.2 2 2 0 0 1 4.1 2H7.1A2 2 0 0 1 9.1 3.7L9.7 6.5A2 2 0 0 1 9.4 8.6L8 10"/><line x1="22" x2="2" y1="2" y2="22"/></svg>`
        ).node);
    }
}
