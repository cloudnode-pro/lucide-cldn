import {Icon} from "../Icon.js";

export class ArrowUpFromDot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 9 12 2 19 9M12 16V2"/><circle cx="12" cy="21" r="1"/></svg>`
        ).node);
    }
}
