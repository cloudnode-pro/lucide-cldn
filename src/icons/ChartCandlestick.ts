import {Icon} from "../Icon.js";

export class ChartCandlestick extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5V9"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15V17M17 3V5"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13V16M3 3V19A2 2 0 0 0 5 21H21"/></svg>`
        ).node);
    }
}
