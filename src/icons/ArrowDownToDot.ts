import {Icon} from "../Icon.js";

export class ArrowDownToDot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V16M19 9 12 16 5 9"/><circle cx="12" cy="21" r="1"/></svg>`
        ).node);
    }
}
