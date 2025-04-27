import {Icon} from "../Icon.js";

export class ArrowUpFromLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 9 12 3 6 9M12 3V17M5 21H19"/></svg>`
        ).node);
    }
}
