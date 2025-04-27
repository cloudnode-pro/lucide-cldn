import {Icon} from "../Icon.js";

export class Cone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.9 18.6 12.9 2.6A1 1 0 0 0 11.1 2.6L3.1 18.6"/><ellipse cx="12" cy="19" rx="9" ry="3"/></svg>`
        ).node);
    }
}
