import {Icon} from "../Icon.js";

export class Heading4 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18V6M17 10V13A1 1 0 0 0 18 14H21M21 10V18M4 12H12M4 18V6"/></svg>`
        ).node);
    }
}
