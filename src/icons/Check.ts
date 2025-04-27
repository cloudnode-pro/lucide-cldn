import {Icon} from "../Icon.js";

export class Check extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6 9 17 4 12"/></svg>`
        ).node);
    }
}
