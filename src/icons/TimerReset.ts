import {Icon} from "../Icon.js";

export class TimerReset extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2H14M12 14V10M4 13A8 8 0 0 1 12 6 8 8 0 1 1 6.7 20L4 17.6"/><path d="M9 17H4V22"/></svg>`
        ).node);
    }
}
