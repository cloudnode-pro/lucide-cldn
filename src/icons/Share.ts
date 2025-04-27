import {Icon} from "../Icon.js";

export class Share extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V12"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>`
        ).node);
    }
}
