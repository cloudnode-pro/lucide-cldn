import {Icon} from "../Icon.js";

export class CloudSun extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V4M5 5 6.2 6.2M20 12H22M19 5 17.8 6.2M16 12.7A4 4 0 0 0 10 8.5M13 22H7A5 5 0 1 1 11.9 16H13A3 3 0 0 1 13 22"/></svg>`
        ).node);
    }
}
