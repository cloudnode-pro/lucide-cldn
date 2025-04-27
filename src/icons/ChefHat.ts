import {Icon} from "../Icon.js";

export class ChefHat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21A1 1 0 0 0 18 20V14.7Q18 13.9 18.7 13.7A4 4 0 0 0 16.6 6 5 5 0 0 0 7.4 6 4 4 0 0 0 5.3 13.6Q6 14 6 14.6V20A1 1 0 0 0 7 21ZM6 17H18"/></svg>`
        ).node);
    }
}
