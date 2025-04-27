import {Icon} from "../Icon.js";

export class Microchip extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 12H20M18 16H20M18 20H20M18 4H20M18 8H20M4 12H6M4 16H6M4 20H6M4 4H6M4 8H6M8 2A2 2 0 0 0 6 4V20A2 2 0 0 0 8 22H16A2 2 0 0 0 18 20V4A2 2 0 0 0 16 2H14.5Q14 2 13.9 2.5A2 2 0 0 1 10.1 2.5Q9.9 2 9.5 2z"/></svg>`
        ).node);
    }
}
