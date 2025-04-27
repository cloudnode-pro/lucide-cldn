import {Icon} from "../Icon.js";

export class CircleParking extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 17V7H13A3 3 0 0 1 13 13H9"/></svg>`
        ).node);
    }
}
