import {Icon} from "../Icon.js";

export class BedDouble extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20V12A2 2 0 0 1 4 10H20A2 2 0 0 1 22 12V20M4 10V6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V10M12 4V10M2 18H22"/></svg>`
        ).node);
    }
}
