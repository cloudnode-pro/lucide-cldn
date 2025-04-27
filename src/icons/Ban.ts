import {Icon} from "../Icon.js";

export class Ban extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M4.9 4.9 19.1 19.1"/></svg>`
        ).node);
    }
}
