import {Icon} from "../Icon.js";

export class Antenna extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12 7 2M7 12 12 2M12 12 17 2M17 12 22 2M4.5 7H19.5M12 16V22"/></svg>`
        ).node);
    }
}
