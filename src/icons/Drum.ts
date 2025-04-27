import {Icon} from "../Icon.js";

export class Drum extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2 10 10M22 2 14 10"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4V21.3M12 14V22M17 13.4V21.3M2 9V17A10 5 0 0 0 22 17V9"/></svg>`
        ).node);
    }
}
