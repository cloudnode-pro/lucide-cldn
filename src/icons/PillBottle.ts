import {Icon} from "../Icon.js";

export class PillBottle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11H14A1 1 0 0 0 13 12V17A1 1 0 0 0 14 18H18"/><path d="M6 7V20A2 2 0 0 0 8 22H16A2 2 0 0 0 18 20V7"/><rect width="16" height="5" x="4" y="2" rx="1"/></svg>`
        ).node);
    }
}
