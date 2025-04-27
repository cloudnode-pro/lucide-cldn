import {Icon} from "../Icon.js";

export class AirVent extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 12H4A2 2 0 0 1 2 10V5A2 2 0 0 1 4 3H20A2 2 0 0 1 22 5V10A2 2 0 0 1 20 12H18M6 8H18M18.3 17.7A2.5 2.5 0 0 1 15.1 21.5 3 3 0 0 1 14 19.5V12M6.6 15.6A2 2 0 1 0 10 17V12"/></svg>`
        ).node);
    }
}
