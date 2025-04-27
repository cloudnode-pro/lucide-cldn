import {Icon} from "../Icon.js";

export class Haze extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.2 6.2 6.6 7.6M2 13H4M20 13H22M17.4 7.6 18.8 6.2M22 17H2M22 21H2M16 13A4 4 0 0 0 8 13M12 5V2.5"/></svg>`
        ).node);
    }
}
