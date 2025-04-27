import {Icon} from "../Icon.js";

export class Sun extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2V4M12 20V22M5 5 6.2 6.2M17.7 17.7 19 19M2 12H4M20 12H22M6.3 17.7 5 19M19 5 17.8 6.2"/></svg>`
        ).node);
    }
}
