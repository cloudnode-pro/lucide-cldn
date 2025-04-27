import {Icon} from "../Icon.js";

export class Bed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 4V20M2 8H20A2 2 0 0 1 22 10V20M2 17H22M6 8V17"/></svg>`
        ).node);
    }
}
