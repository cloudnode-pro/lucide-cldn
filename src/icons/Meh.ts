import {Icon} from "../Icon.js";

export class Meh extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="15" y2="15"/><line x1="9" x2="9" y1="9" y2="9"/><line x1="15" x2="15" y1="9" y2="9"/></svg>`
        ).node);
    }
}
