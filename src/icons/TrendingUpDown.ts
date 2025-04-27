import {Icon} from "../Icon.js";

export class TrendingUpDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.8 14.8 21 21M21 16V21H16M21 3 12 12 8 8 2 14"/><path d="M21 8V3H16"/></svg>`
        ).node);
    }
}
