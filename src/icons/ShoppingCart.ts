import {Icon} from "../Icon.js";

export class ShoppingCart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2H4L6.8 14.6A2 2 0 0 0 8.7 16H18.5A2 2 0 0 0 20.5 14.5L22 7H5"/></svg>`
        ).node);
    }
}
