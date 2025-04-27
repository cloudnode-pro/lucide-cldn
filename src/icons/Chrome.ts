import {Icon} from "../Icon.js";

export class Chrome extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.2" x2="12" y1="8" y2="8"/><line x1="4" x2="8.5" y1="6.1" y2="14"/><line x1="10.9" x2="15.5" y1="21.9" y2="14"/></svg>`
        ).node);
    }
}
