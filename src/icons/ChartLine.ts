import {Icon} from "../Icon.js";

export class ChartLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3V19A2 2 0 0 0 5 21H21"/><path d="M19 9 14 14 10 10 7 13"/></svg>`
        ).node);
    }
}
