import {Icon} from "../Icon.js";

export class UserRoundPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21A8 8 0 0 1 15.3 15"/><circle cx="10" cy="8" r="5"/><path d="M19 16V22M22 19H16"/></svg>`
        ).node);
    }
}
