import {Icon} from "../Icon.js";

export class VenusAndMars extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20H14M12 16V22M17 2H21V6M21 2 15.5 7.5"/><circle cx="12" cy="11" r="5"/></svg>`
        ).node);
    }
}
