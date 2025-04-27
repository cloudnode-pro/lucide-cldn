import {Icon} from "../Icon.js";

export class Tally2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4V20M9 4V20"/></svg>`
        ).node);
    }
}
