import {Icon} from "../Icon.js";

export class Siren extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 18V12A5 5 0 1 1 17 12V18M5 21A1 1 0 0 0 6 22H18A1 1 0 0 0 19 21V20A2 2 0 0 0 17 18H7A2 2 0 0 0 5 20zM21 12H22M18.5 4.5 18 5M2 12H3M12 2V3M5 5 5.5 5.5M12 12V18"/></svg>`
        ).node);
    }
}
