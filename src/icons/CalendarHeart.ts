import {Icon} from "../Icon.js";

export class CalendarHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10H21V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H12M8 2V6M16 2V6"/><path d="M21.3 14.7A2.4 2.4 0 0 0 18.6 14.2L17.8 14.7 17.5 15 17.2 14.7A2.4 2.4 0 0 0 14.5 14.2L13.7 14.7Q12.2 16.4 14 18.5L17.5 22 21.1 18.5C22.3 17.2 22.2 15.6 21.3 14.7"/></svg>`
        ).node);
    }
}
