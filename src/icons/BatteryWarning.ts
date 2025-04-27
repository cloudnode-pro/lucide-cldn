import {Icon} from "../Icon.js";

export class BatteryWarning extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7V13M14 7H16A2 2 0 0 1 18 9V15A2 2 0 0 1 16 17H14M22 11V13M6 7H4A2 2 0 0 0 2 9V15A2 2 0 0 0 4 17H6"/></svg>`
        ).node);
    }
}
