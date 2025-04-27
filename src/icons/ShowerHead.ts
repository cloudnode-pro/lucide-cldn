import {Icon} from "../Icon.js";

export class ShowerHead extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4 6.5 6.5M13.5 6.5A5 5 0 0 0 6.5 13.5M15 5 5 15M20 11"/></svg>`
        ).node);
    }
}
