import {Icon} from "../Icon.js";

export class SunMoon extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8A2.8 2.8 0 0 0 16 12 4 4 0 1 1 12 8M12 2V4M12 20V22M4.9 4.9 6.3 6.3M17.7 17.7 19.1 19.1M2 12H4M20 12H22M6.3 17.7 4.9 19.1M19.1 4.9 17.7 6.3"/></svg>`
        ).node);
    }
}
