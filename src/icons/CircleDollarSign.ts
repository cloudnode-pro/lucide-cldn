import {Icon} from "../Icon.js";

export class CircleDollarSign extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 8H10A2 2 0 1 0 10 12H14A2 2 0 1 1 14 16H8M12 18V6"/></svg>`
        ).node);
    }
}
