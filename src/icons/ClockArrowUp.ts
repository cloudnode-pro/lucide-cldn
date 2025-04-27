import {Icon} from "../Icon.js";

export class ClockArrowUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.2 22A10 10 0 1 1 22 12.2"/><path d="M12 6V12L13.6 12.8M14 18 18 14 22 18M18 22V14"/></svg>`
        ).node);
    }
}
