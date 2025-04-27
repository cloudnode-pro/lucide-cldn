import {Icon} from "../Icon.js";

export class Scale3d extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 7V18A1 1 0 0 0 6 19H17M5.3 18.7 11 13"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/></svg>`
        ).node);
    }
}
