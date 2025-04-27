import {Icon} from "../Icon.js";

export class Import extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3V15M8 11 12 15 16 11"/><path d="M8 5H4A2 2 0 0 0 2 7V17A2 2 0 0 0 4 19H20A2 2 0 0 0 22 17V7A2 2 0 0 0 20 5H16"/></svg>`
        ).node);
    }
}
