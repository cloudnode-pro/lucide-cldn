import {Icon} from "../Icon.js";

export class Presentation extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 3H22M21 3V14A2 2 0 0 1 19 16H5A2 2 0 0 1 3 14V3M7 21 12 16 17 21"/></svg>`
        ).node);
    }
}
