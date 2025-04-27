import {Icon} from "../Icon.js";

export class Asterisk extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V18M17.2 9 6.8 15M6.8 9 17.2 15"/></svg>`
        ).node);
    }
}
