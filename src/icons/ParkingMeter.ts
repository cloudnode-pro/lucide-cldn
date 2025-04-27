import {Icon} from "../Icon.js";

export class ParkingMeter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 15H13M12 12V15M12 19V22M15.3 19A1 1 0 0 0 16.3 18.3L18.5 11.3A7 7 0 1 0 5.4 11.3L7.8 18.3A1 1 0 0 0 8.8 19z"/><path d="M9 9A3 3 0 1 1 15 9"/></svg>`
        ).node);
    }
}
