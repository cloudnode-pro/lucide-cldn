import {Icon} from "../Icon.js";

export class Tornado extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 4H3M18 8H6M19 12H9M16 16H10M11 20H9"/></svg>`
        ).node);
    }
}
