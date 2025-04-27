import {Icon} from "../Icon.js";

export class ChartColumnIncreasing extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 17V9M18 17V5M3 3V19A2 2 0 0 0 5 21H21M8 17V14"/></svg>`
        ).node);
    }
}
