import {Icon} from "../Icon.js";

export class Drill extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18A1 1 0 0 1 11 19V21A1 1 0 0 1 10 22H5A3 3 0 0 1 2 19 1 1 0 0 1 3 18zM13 10H4A2 2 0 0 1 2 8V4A2 2 0 0 1 4 2H13A1 1 0 0 1 14 3V9A1 1 0 0 1 13 10L12.2 13.2A1 1 0 0 1 11.2 14H8M14 4H17A1 1 0 0 1 18 5V7A1 1 0 0 1 17 8H14M18 6H22M5 10 3 18M7 18 9 10"/></svg>`
        ).node);
    }
}
