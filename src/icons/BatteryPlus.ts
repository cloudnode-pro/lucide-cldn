import {Icon} from "../Icon.js";

export class BatteryPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9V15M13.5 7H16A2 2 0 0 1 18 9V15A2 2 0 0 1 16 17H13.5M22 11V13M6.5 17H4A2 2 0 0 1 2 15V9A2 2 0 0 1 4 7H6.5M7 12H13"/></svg>`
        ).node);
    }
}
