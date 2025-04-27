import {Icon} from "../Icon.js";

export class Blinds extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3H21M20 7H8M20 11H8M10 19H20M8 15H20M4 3V17"/><circle cx="4" cy="19" r="2"/></svg>`
        ).node);
    }
}
