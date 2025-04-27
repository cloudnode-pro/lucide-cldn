import {Icon} from "../Icon.js";

export class Link2Off extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17H7A5 5 0 0 1 7 7M15 7H17A5 5 0 0 1 21 15"/><line x1="8" x2="12" y1="12" y2="12"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
