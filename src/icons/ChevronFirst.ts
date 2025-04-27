import {Icon} from "../Icon.js";

export class ChevronFirst extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 18 11 12 17 6M7 6V18"/></svg>`
        ).node);
    }
}
