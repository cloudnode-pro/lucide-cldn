import {Icon} from "../Icon.js";

export class ArrowUpLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17V7H17M17 17 7 7"/></svg>`
        ).node);
    }
}
