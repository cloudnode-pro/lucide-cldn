import {Icon} from "../Icon.js";

export class CircleUserRound extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 20A6 6 0 0 0 6 20"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
