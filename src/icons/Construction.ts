import {Icon} from "../Icon.js";

export class Construction extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="6" rx="1"/><path d="M17 14V21M7 14V21M17 3V6M7 3V6M10 14 2.3 6.3M14 6 21.7 13.7M8 6 16 14"/></svg>`
        ).node);
    }
}
