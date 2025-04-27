import {Icon} from "../Icon.js";

export class CalendarSync extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 10V14H15"/><path d="M11 14 12.5 12.4A5 5 0 0 1 20.5 13.9M16 2V6M21 18 19.5 19.6A5 5 0 0 1 11.5 18.1"/><path d="M21 22V18H17M21 8.5V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H9.3M3 10H7M8 2V6"/></svg>`
        ).node);
    }
}
