import {Icon} from "../Icon.js";

export class BadgeInfo extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.9 8.6A4 4 0 0 1 8.6 4 4 4 0 0 1 15.4 3.9 4 4 0 0 1 20.2 8.6 4 4 0 0 1 20.2 15.4 4 4 0 0 1 15.4 20 4 4 0 0 1 8.6 20.2 4 4 0 0 1 4 15.5 4 4 0 0 1 3.9 8.6"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12" y1="8" y2="8"/></svg>`
        ).node);
    }
}
