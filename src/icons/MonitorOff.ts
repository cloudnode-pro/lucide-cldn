import {Icon} from "../Icon.js";

export class MonitorOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17H4A2 2 0 0 1 2 15V5C2 3.5 3 3 3 3M22 15V5A2 2 0 0 0 20 3H9M8 21H16M12 17V21M2 2 22 22"/></svg>`
        ).node);
    }
}
