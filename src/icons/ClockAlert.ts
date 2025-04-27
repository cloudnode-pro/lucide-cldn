import {Icon} from "../Icon.js";

export class ClockAlert extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V12L16 14"/><path d="M16 21.2A10 10 0 1 1 21 7.6M20 11.5V17.5M20 21.5"/></svg>`
        ).node);
    }
}
