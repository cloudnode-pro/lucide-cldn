import {Icon} from "../Icon.js";

export class Sunset extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10V2M5 11 6.2 12.2M2 18H4M20 18H22M19 11 17.8 12.2M22 22H2M16 6 12 10 8 6M16 18A4 4 0 0 0 8 18"/></svg>`
        ).node);
    }
}
