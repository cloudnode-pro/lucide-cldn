import {Icon} from "../Icon.js";

export class NavigationOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.4 8.4 3 11 11 13 13 21 15.6 15.6M17.4 11.7 22 2 12.3 6.6"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
