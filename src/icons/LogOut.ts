import {Icon} from "../Icon.js";

export class LogOut extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H9"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`
        ).node);
    }
}
