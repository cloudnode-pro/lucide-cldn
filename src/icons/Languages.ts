import {Icon} from "../Icon.js";

export class Languages extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 8 11 14M4 14 10 8 12 5M2 5H14M7 2H8M22 22 17 12 12 22M14 18H20"/></svg>`
        ).node);
    }
}
