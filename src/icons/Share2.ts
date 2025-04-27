import {Icon} from "../Icon.js";

export class Share2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" x2="15.4" y1="13.5" y2="17.5"/><line x1="15.4" x2="8.6" y1="6.5" y2="10.5"/></svg>`
        ).node);
    }
}
