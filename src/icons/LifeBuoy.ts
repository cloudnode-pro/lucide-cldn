import {Icon} from "../Icon.js";

export class LifeBuoy extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M5 5 9.1 9.1M14.8 9.2 19.1 4.9M14.8 14.8 19.1 19.1M9.2 14.8 4.9 19.1"/><circle cx="12" cy="12" r="4"/></svg>`
        ).node);
    }
}
