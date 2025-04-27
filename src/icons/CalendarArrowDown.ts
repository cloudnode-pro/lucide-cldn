import {Icon} from "../Icon.js";

export class CalendarArrowDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 18 18 22 22 18M16 2V6M18 14V22"/><path d="M21 11.4V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H12.3M3 10H21M8 2V6"/></svg>`
        ).node);
    }
}
