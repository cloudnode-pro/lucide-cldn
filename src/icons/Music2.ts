import {Icon} from "../Icon.js";

export class Music2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="18" r="4"/><path d="M12 18V2L19 6"/></svg>`
        ).node);
    }
}
