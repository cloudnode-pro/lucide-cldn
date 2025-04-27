import {Icon} from "../Icon.js";

export class ArrowUpToLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3H19M18 13 12 7 6 13M12 7V21"/></svg>`
        ).node);
    }
}
