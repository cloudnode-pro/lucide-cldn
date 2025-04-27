import {Icon} from "../Icon.js";

export class Diameter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="M6.5 3.7A10 10 0 0 1 20.3 17.5M6.4 6.4 17.6 17.6M3.7 6.5A10 10 0 0 0 17.5 20.3"/></svg>`
        ).node);
    }
}
