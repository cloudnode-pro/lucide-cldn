import {Icon} from "../Icon.js";

export class CalendarArrowUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 18 18 14 22 18M16 2V6M18 22V14"/><path d="M21 11.3V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H14M3 10H21M8 2V6"/></svg>`
        ).node);
    }
}
