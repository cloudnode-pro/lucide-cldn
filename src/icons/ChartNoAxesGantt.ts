import {Icon} from "../Icon.js";

export class ChartNoAxesGantt extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 6H18M6 12H15M11 18H18"/></svg>`
        ).node);
    }
}
