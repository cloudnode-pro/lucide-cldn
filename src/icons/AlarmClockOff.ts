import {Icon} from "../Icon.js";

export class AlarmClockOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6.9 6.9A8 8 0 1 0 18 18M19.9 14.3A8 8 0 0 0 10.8 5M22 6 19 3M6.3 18.7 4 21M2 2 22 22M4 4 2 6"/></svg>`
        ).node);
    }
}
