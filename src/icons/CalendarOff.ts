import {Icon} from "../Icon.js";

export class CalendarOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.2 4.2A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H19A2 2 0 0 0 20.8 20.8M21 15.5V6A2 2 0 0 0 19 4H9.5M16 2V6M3 10H10M21 10H15.5M2 2 22 22"/></svg>`
        ).node);
    }
}
