import {Icon} from "../Icon.js";

export class ArrowDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5V19M19 12 12 19 5 12"/></svg>`
        ).node);
    }
}
