import {Icon} from "../Icon.js";

export class Transgender extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16V22M14 20H10M18 2H22V6M2 2 9.2 9.2M2 5.4V2H5.4M22 2 14.8 9.2M8 5 5 8"/><circle cx="12" cy="12" r="4"/></svg>`
        ).node);
    }
}
