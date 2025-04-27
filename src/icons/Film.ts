import {Icon} from "../Icon.js";

export class Film extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3V21M3 7.5H7M3 12H21M3 16.5H7M17 3V21M17 7.5H21M17 16.5H21"/></svg>`
        ).node);
    }
}
