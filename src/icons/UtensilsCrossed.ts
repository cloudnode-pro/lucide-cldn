import {Icon} from "../Icon.js";

export class UtensilsCrossed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2 13.7 4.3A3 3 0 0 0 13.7 8.5L15.5 10.3A3 3 0 0 0 19.7 10.3L22 8M15 15 3.3 3.3A4 4 0 0 0 3.3 9.3L10.6 16.6C11.3 17.3 12.6 17.3 13.4 16.6zM15 15 22 22M2.1 21.8 8.5 15.5M19 5 12 12"/></svg>`
        ).node);
    }
}
