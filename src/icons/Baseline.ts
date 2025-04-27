import {Icon} from "../Icon.js";

export class Baseline extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 20H20M6 16 12 4 18 16M8 12H16"/></svg>`
        ).node);
    }
}
