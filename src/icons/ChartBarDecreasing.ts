import {Icon} from "../Icon.js";

export class ChartBarDecreasing extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3V19A2 2 0 0 0 5 21H21M7 11H15M7 16H10M7 6H19"/></svg>`
        ).node);
    }
}
