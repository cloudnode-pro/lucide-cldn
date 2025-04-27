import {Icon} from "../Icon.js";

export class ChartNoAxesCombined extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16V21M16 14V21M20 10V21M22 3 13.4 11.6A.5.5 0 0 1 12.6 11.6L9.4 8.4A.5.5 0 0 0 8.6 8.4L2 15M4 18V21M8 14V21"/></svg>`
        ).node);
    }
}
