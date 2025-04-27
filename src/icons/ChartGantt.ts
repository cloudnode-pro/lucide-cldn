import {Icon} from "../Icon.js";

export class ChartGantt extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H18M12 16H18M3 3V19A2 2 0 0 0 5 21H21M8 11H15"/></svg>`
        ).node);
    }
}
