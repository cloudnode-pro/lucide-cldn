import {Icon} from "../Icon.js";

export class WineOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 22H16M7 10H10M17 10H15.7M12 15V22M7.3 7.3 7 10A5 5 0 0 0 14.4 14.4M8.6 3 9 2H15C16.5 6 17 8 17 10L16.9 11.2"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
