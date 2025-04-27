import {Icon} from "../Icon.js";

export class AlarmClockCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M5 3 2 6M22 6 19 3M6.4 18.7 4 21M17.6 18.7 20 21M9 13 11 15 15 11"/></svg>`
        ).node);
    }
}
