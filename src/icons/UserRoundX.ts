import {Icon} from "../Icon.js";

export class UserRoundX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21A8 8 0 0 1 13.9 14"/><circle cx="10" cy="8" r="5"/><path d="M17 17 22 22M22 17 17 22"/></svg>`
        ).node);
    }
}
