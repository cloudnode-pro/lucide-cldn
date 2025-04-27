import {Icon} from "../Icon.js";

export class RefreshCcwDot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2V8H9"/><path d="M21 12A9 9 0 0 0 6 5.3L3 8M21 22V16H15"/><path d="M3 12A9 9 0 0 0 18 18.7L21 16"/><circle cx="12" cy="12" r="1"/></svg>`
        ).node);
    }
}
