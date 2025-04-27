import {Icon} from "../Icon.js";

export class SunMedium extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3V4M12 20V21M3 12H4M20 12H21M18.4 5.6 17.7 6.3M6.3 17.7 5.6 18.4M5.6 5.6 6.3 6.3M17.7 17.7 18.4 18.4"/></svg>`
        ).node);
    }
}
