import {Icon} from "../Icon.js";

export class Eclipse extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2A7 7 0 1 0 22 12"/></svg>`
        ).node);
    }
}
