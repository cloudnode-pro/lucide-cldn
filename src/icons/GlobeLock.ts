import {Icon} from "../Icon.js";

export class GlobeLock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.7 15A15 15 0 0 1 12 22 14.5 14.5 0 0 1 12 2 10 10 0 1 0 21.5 15M2 12H10.5M20 6V4A2 2 0 1 0 16 4V6"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>`
        ).node);
    }
}
