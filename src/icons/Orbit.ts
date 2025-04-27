import {Icon} from "../Icon.js";

export class Orbit extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.3 6.5A10 10 0 0 1 10.3 21.9M3.7 17.5A10 10 0 0 1 13.7 2.2"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>`
        ).node);
    }
}
