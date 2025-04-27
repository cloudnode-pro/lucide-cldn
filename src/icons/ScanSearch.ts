import {Icon} from "../Icon.js";

export class ScanSearch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5A2 2 0 0 1 5 3H7M17 3H19A2 2 0 0 1 21 5V7M21 17V19A2 2 0 0 1 19 21H17M7 21H5A2 2 0 0 1 3 19V17"/><circle cx="12" cy="12" r="3"/><path d="M16 16 14.1 14.1"/></svg>`
        ).node);
    }
}
