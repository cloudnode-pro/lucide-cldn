import {Icon} from "../Icon.js";

export class ChartBar extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3V19A2 2 0 0 0 5 21H21M7 16H15M7 11H19M7 6H10"/></svg>`
        ).node);
    }
}
