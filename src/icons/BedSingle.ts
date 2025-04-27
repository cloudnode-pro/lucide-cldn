import {Icon} from "../Icon.js";

export class BedSingle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 20V12A2 2 0 0 1 5 10H19A2 2 0 0 1 21 12V20M5 10V6A2 2 0 0 1 7 4H17A2 2 0 0 1 19 6V10M3 18H21"/></svg>`
        ).node);
    }
}
