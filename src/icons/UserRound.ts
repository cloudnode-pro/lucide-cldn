import {Icon} from "../Icon.js";

export class UserRound extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M20 21A8 8 0 0 0 4 21"/></svg>`
        ).node);
    }
}
