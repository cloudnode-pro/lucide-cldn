import {Icon} from "../Icon.js";

export class Library extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 6 20 20M12 6V20M8 8V20M4 4V20"/></svg>`
        ).node);
    }
}
