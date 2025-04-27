import {Icon} from "../Icon.js";

export class Microscope extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18H14M3 22H21M14 22A7 7 0 1 0 14 8H13M9 14H11M9 12A2 2 0 0 1 7 10V6H13V10A2 2 0 0 1 11 12ZM12 6V3A1 1 0 0 0 11 2H9A1 1 0 0 0 8 3V6"/></svg>`
        ).node);
    }
}
