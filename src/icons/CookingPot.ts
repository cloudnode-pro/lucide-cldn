import {Icon} from "../Icon.js";

export class CookingPot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12H22M20 12V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V12M4 8 20 4M8.9 6.8 8.4 5A2 2 0 0 1 10 2.5L11.8 2.1A2 2 0 0 1 14.2 3.5L14.7 5.3"/></svg>`
        ).node);
    }
}
