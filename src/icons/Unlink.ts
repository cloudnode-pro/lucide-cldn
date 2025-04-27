import {Icon} from "../Icon.js";

export class Unlink extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.8 12.3 20.6 10.5H20.6A5 5 0 0 0 20.3 3.5 5 5 0 0 0 13.4 3.5L11.8 5.2M5.2 11.8 3.5 13.5A5 5 0 0 0 3.5 20.5 5 5 0 0 0 10.6 20.5L12.2 18.8"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/></svg>`
        ).node);
    }
}
