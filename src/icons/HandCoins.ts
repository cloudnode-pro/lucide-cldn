import {Icon} from "../Icon.js";

export class HandCoins extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 15H13A2 2 0 1 0 13 11H10Q9 11 8.6 11.6L3 17"/><path d="M7 21 8.6 19.6Q9.1 19 10 19H14Q15.7 19 16.8 17.8L21.4 13.4A2 2 0 0 0 18.7 10.4L14.3 14.5M2 16 8 22"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>`
        ).node);
    }
}
