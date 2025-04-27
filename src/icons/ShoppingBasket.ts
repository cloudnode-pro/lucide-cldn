import {Icon} from "../Icon.js";

export class ShoppingBasket extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 11 14 20M19 11 15 4M2 11H22M3.5 11 5.1 18.4A2 2 0 0 0 7.1 20H16.9A2 2 0 0 0 18.9 18.4L20.6 11M4.5 15.5H19.5M5 11 9 4M9 11 10 20"/></svg>`
        ).node);
    }
}
