import {Icon} from "../Icon.js";

export class Heading2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12H12M4 18V6M12 18V6M21 18H17C17 14 21 15 21 12 21 10.5 19 9.5 17 11"/></svg>`
        ).node);
    }
}
