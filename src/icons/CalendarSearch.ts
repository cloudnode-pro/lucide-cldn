import {Icon} from "../Icon.js";

export class CalendarSearch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2V6M21 11.8V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H12.3M22 22 20.1 20.1M3 10H21M8 2V6"/><circle cx="18" cy="18" r="3"/></svg>`
        ).node);
    }
}
