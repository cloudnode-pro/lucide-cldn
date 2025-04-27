import {Icon} from "../Icon.js";

export class Heading1 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12H12M4 18V6M12 18V6M17 12 20 10V18"/></svg>`
        ).node);
    }
}
