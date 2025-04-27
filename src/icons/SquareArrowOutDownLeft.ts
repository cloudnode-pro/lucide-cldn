import {Icon} from "../Icon.js";

export class SquareArrowOutDownLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3H5A2 2 0 0 0 3 5V11M3 21 12 12M9 21H3V15"/></svg>`
        ).node);
    }
}
