import {Icon} from "../Icon.js";

export class RefreshCcw extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12A9 9 0 0 0 12 3 10 10 0 0 0 5.3 5.7L3 8"/><path d="M3 3V8H8M3 12A9 9 0 0 0 12 21 10 10 0 0 0 18.7 18.3L21 16"/><path d="M16 16H21V21"/></svg>`
        ).node);
    }
}
