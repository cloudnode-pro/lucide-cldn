import {Icon} from "../Icon.js";

export class TimerOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2H14M4.6 11A8 8 0 0 0 6.3 19.7 8 8 0 0 0 15 21.4M7.4 7.4A8 8 0 0 1 17.7 8.4 8 8 0 0 1 18.6 18.6M2 2 22 22M12 12V10"/></svg>`
        ).node);
    }
}
