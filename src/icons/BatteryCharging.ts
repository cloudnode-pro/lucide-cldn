import {Icon} from "../Icon.js";

export class BatteryCharging extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 7H16A2 2 0 0 1 18 9V15A2 2 0 0 1 16 17H14M6 7H4A2 2 0 0 0 2 9V15A2 2 0 0 0 4 17H5M11 7 8 12H12L9 17"/><line x1="22" x2="22" y1="11" y2="13"/></svg>`
        ).node);
    }
}
