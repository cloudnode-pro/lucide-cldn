import {Icon} from "../Icon.js";

export class Bath extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 4 8 6M17 19V21M2 12H22M7 19V21M9 5 7.6 3.6A2.1 2.1 0 0 0 4 5V17A2 2 0 0 0 6 19H18A2 2 0 0 0 20 17V12"/></svg>`
        ).node);
    }
}
