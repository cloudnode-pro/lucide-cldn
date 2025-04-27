import {Icon} from "../Icon.js";

export class UtilityPole extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V22M2 5H22M3 3V5M7 3V5M17 3V5M21 3V5M19 5 12 12 5 5"/></svg>`
        ).node);
    }
}
