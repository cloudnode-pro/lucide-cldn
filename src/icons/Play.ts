import {Icon} from "../Icon.js";

export class Play extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polygon points="6 3 20 12 6 21 6 3"/></svg>`
        ).node);
    }
}
