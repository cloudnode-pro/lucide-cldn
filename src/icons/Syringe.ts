import {Icon} from "../Icon.js";

export class Syringe extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2 22 6M17 7 20 4M19 9 8.7 19.3C7.7 20.3 6.2 20.3 5.3 19.3L4.7 18.7C3.7 17.7 3.7 16.2 4.7 15.3L15 5M9 11 13 15M5 19 2 22M14 4 20 10"/></svg>`
        ).node);
    }
}
