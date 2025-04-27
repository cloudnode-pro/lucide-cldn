import {Icon} from "../Icon.js";

export class UmbrellaOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V3M15.5 21A1.9 1.9 0 0 1 12 20V12H2A10 10 0 0 1 5.4 5.4M17.5 12H22A10 10 0 0 0 9 3.5M2 2 22 22"/></svg>`
        ).node);
    }
}
