import {Icon} from "../Icon.js";

export class Move extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V22M15 19 12 22 9 19M19 9 22 12 19 15M2 12H22M5 9 2 12 5 15M9 5 12 2 15 5"/></svg>`
        ).node);
    }
}
