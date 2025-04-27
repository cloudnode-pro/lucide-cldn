import {Icon} from "../Icon.js";

export class BadgeX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.9 8.6A4 4 0 0 1 8.6 4 4 4 0 0 1 15.4 3.9 4 4 0 0 1 20.2 8.6 4 4 0 0 1 20.2 15.4 4 4 0 0 1 15.4 20 4 4 0 0 1 8.6 20.2 4 4 0 0 1 4 15.5 4 4 0 0 1 3.9 8.6"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`
        ).node);
    }
}
