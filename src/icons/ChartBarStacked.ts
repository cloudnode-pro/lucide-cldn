import {Icon} from "../Icon.js";

export class ChartBarStacked extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 13V17M15 5V9M3 3V19A2 2 0 0 0 5 21H21"/><rect width="9" height="4" x="7" y="13" rx="1"/><rect width="12" height="4" x="7" y="5" rx="1"/></svg>`
        ).node);
    }
}
