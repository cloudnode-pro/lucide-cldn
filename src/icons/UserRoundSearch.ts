import {Icon} from "../Icon.js";

export class UserRoundSearch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="8" r="5"/><path d="M2 21A8 8 0 0 1 12.4 13.4"/><circle cx="18" cy="18" r="3"/><path d="M22 22 20.1 20.1"/></svg>`
        ).node);
    }
}
