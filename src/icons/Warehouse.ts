import {Icon} from "../Icon.js";

export class Warehouse extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 8.4V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V8.4A2 2 0 0 1 3.3 6.5L11.3 3.3A2 2 0 0 1 12.7 3.3L20.7 6.5A2 2 0 0 1 22 8.3M6 18H18M6 14H18"/><rect width="12" height="12" x="6" y="10"/></svg>`
        ).node);
    }
}
