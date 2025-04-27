import {Icon} from "../Icon.js";

export class ShoppingBag extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2 3 6V20A2 2 0 0 0 5 22H19A2 2 0 0 0 21 20V6L18 2ZM3 6H21"/><path d="M16 10A4 4 0 0 1 8 10"/></svg>`
        ).node);
    }
}
