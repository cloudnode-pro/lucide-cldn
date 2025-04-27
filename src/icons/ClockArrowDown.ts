import {Icon} from "../Icon.js";

export class ClockArrowDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.3 22A10 10 0 1 1 22 13.2"/><path d="M12 6V12L14 13M14 18 18 22 22 18M18 14V22"/></svg>`
        ).node);
    }
}
