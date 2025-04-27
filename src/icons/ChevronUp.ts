import {Icon} from "../Icon.js";

export class ChevronUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 15 12 9 6 15"/></svg>`
        ).node);
    }
}
