import {Icon} from "../Icon.js";

export class Radius extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.3 17.5A10 10 0 1 0 17.5 20.3"/><circle cx="19" cy="19" r="2"/><path d="M13.4 13.4 17.6 17.6"/><circle cx="12" cy="12" r="2"/></svg>`
        ).node);
    }
}
