import {Icon} from "../Icon.js";

export class ArrowDownLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7 7 17M17 17H7V7"/></svg>`
        ).node);
    }
}
