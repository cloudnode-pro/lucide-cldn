import {Icon} from "../Icon.js";

export class ChevronLast extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 18 13 12 7 6M17 6V18"/></svg>`
        ).node);
    }
}
