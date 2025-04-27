import {Icon} from "../Icon.js";

export class CheckCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 7 17 2 12M22 10 14.5 17.5 13 16"/></svg>`
        ).node);
    }
}
