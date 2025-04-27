import {Icon} from "../Icon.js";

export class CalendarFold extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2V6M16 2V6M21 17V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H16ZM3 10H21"/><path d="M15 22V18A2 2 0 0 1 17 16H21"/></svg>`
        ).node);
    }
}
