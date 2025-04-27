import {Icon} from "../Icon.js";

export class Mountain extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3 12 11 17 6 22 21H2z"/></svg>`
        ).node);
    }
}
