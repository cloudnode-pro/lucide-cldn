import {Icon} from "../Icon.js";

export class Gavel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 12.5 6.5 20.5A2.1 2.1 0 1 1 3.5 17.5L11.5 9.5M16 16 22 10M8 8 14 2M9 7 17 15M21 11 13 3"/></svg>`
        ).node);
    }
}
