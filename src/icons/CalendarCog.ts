import {Icon} from "../Icon.js";

export class CalendarCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.2 16.9 14.3 16.5M15.2 19.1 14.3 19.5M16 2V6M16.5 14.3 16.9 15.3M16.9 20.8 16.5 21.7M19.1 15.2 19.5 14.3M19.5 21.7 19.1 20.7M20.8 16.9 21.7 16.5M20.8 19.1 21.7 19.5M21 11V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H11M3 10H21M8 2V6"/><circle cx="18" cy="18" r="3"/></svg>`
        ).node);
    }
}
