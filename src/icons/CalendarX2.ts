import {Icon} from "../Icon.js";

export class CalendarX2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2V6M16 2V6M21 13V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H13M3 10H21M17 22 22 17M17 17 22 22"/></svg>`
        ).node);
    }
}
