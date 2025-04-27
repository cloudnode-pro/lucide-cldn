import {Icon} from "../Icon.js";

export class Superscript extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19 12 11M12 19 4 11M20 12H16C16 10.5 16.4 10 17.5 9.5S20 8.3 20 7Q20 6.2 19.5 5.7A2 2 0 0 0 17 5.3 2 2 0 0 0 16 6.3"/></svg>`
        ).node);
    }
}
