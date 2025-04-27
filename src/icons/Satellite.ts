import {Icon} from "../Icon.js";

export class Satellite extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7 9 3 5 7 9 11M17 11 21 15 17 19 13 15"/><path d="M8 12 12 16 18 10 14 6ZM16 8 19 5M9 21A6 6 0 0 0 3 15"/></svg>`
        ).node);
    }
}
