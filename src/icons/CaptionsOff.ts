import {Icon} from "../Icon.js";

export class CaptionsOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 5H19A2 2 0 0 1 21 7V15.5M17 11H16.5M19 19H5A2 2 0 0 1 3 17V7A2 2 0 0 1 5 5M2 2 22 22M7 11H11M7 15H9.5"/></svg>`
        ).node);
    }
}
