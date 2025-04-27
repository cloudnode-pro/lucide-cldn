import {Icon} from "../Icon.js";

export class Dices extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="M18 14 21.3 10.5A2 2 0 0 0 21.4 7.5L16.4 2.5A2 2 0 0 0 13.4 2.6L10 6M18 9"/></svg>`
        ).node);
    }
}
