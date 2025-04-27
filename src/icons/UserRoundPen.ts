import {Icon} from "../Icon.js";

export class UserRoundPen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21A8 8 0 0 1 12.8 13.5M21.4 16.6A1 1 0 0 0 18.4 13.6L14.4 17.6 13.9 18.5 13 21.4A.5.5 0 0 0 13.6 22L16.6 21 17.3 20.6z"/><circle cx="10" cy="8" r="5"/></svg>`
        ).node);
    }
}
