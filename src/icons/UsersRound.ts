import {Icon} from "../Icon.js";

export class UsersRound extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 21A8 8 0 0 0 2 21"/><circle cx="10" cy="8" r="5"/><path d="M22 20C22 16.6 20 13.5 18 12A5 5 0 0 0 17.6 3.7"/></svg>`
        ).node);
    }
}
