import {Icon} from "../Icon.js";

export class PinOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17V22M15 9.3V7A1 1 0 0 1 16 6 2 2 0 0 0 16 2H7.9M2 2 22 22M9 9V10.8A2 2 0 0 1 7.9 12.5L6 13.6A2 2 0 0 0 5 15.2V16A1 1 0 0 0 6 17H17"/></svg>`
        ).node);
    }
}
