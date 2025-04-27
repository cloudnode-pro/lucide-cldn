import {Icon} from "../Icon.js";

export class RefreshCw extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12A9 9 0 0 1 12 3 10 10 0 0 1 18.7 5.7L21 8"/><path d="M21 3V8H16M21 12A9 9 0 0 1 12 21 10 10 0 0 1 5.3 18.3L3 16"/><path d="M8 16H3V21"/></svg>`
        ).node);
    }
}
