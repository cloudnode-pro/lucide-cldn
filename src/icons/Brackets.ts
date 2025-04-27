import {Icon} from "../Icon.js";

export class Brackets extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3H18A1 1 0 0 1 19 4V20A1 1 0 0 1 18 21H16M8 21H6A1 1 0 0 1 5 20V4A1 1 0 0 1 6 3H8"/></svg>`
        ).node);
    }
}
