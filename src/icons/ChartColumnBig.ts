import {Icon} from "../Icon.js";

export class ChartColumnBig extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3V19A2 2 0 0 0 5 21H21"/><rect width="4" height="12" x="15" y="5" rx="1"/><rect width="4" height="9" x="7" y="8" rx="1"/></svg>`
        ).node);
    }
}
