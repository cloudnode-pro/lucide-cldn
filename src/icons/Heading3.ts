import {Icon} from "../Icon.js";

export class Heading3 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12H12M4 18V6M12 18V6M17.5 10.5C19.2 9.5 21 10.5 21 12A2 2 0 0 1 19 14M17 17.5C19 19 21 17.8 21 16A2 2 0 0 0 19 14"/></svg>`
        ).node);
    }
}
