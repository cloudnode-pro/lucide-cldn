import {Icon} from "../Icon.js";

export class Scroll extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 17V5A2 2 0 0 0 17 3H4"/><path d="M8 21H20A2 2 0 0 0 22 19V18A1 1 0 0 0 21 17H11A1 1 0 0 0 10 18V19A2 2 0 1 1 6 19V5A2 2 0 1 0 2 5V7A1 1 0 0 0 3 8H6"/></svg>`
        ).node);
    }
}
