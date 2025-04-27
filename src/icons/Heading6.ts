import {Icon} from "../Icon.js";

export class Heading6 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12H12M4 18V6M12 18V6"/><circle cx="19" cy="16" r="2"/><path d="M20 10C18 12 17 13.5 17 16"/></svg>`
        ).node);
    }
}
