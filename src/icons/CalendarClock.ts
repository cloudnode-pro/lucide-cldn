import {Icon} from "../Icon.js";

export class CalendarClock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7.5V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H8.5M16 2V6M8 2V6M3 10H8M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>`
        ).node);
    }
}
