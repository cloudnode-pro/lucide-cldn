import {Icon} from "../Icon.js";

export class StarOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.3 8.3 2 9.3 7 14 5.8 21 12 17.8 18.2 21 17.6 17.6M18.4 12.8 22 9.3 15 8.3 12 2 10.6 5"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
