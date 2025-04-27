import {Icon} from "../Icon.js";

export class ArrowDownRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7 17 17M17 7V17H7"/></svg>`
        ).node);
    }
}
