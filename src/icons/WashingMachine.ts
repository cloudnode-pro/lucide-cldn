import {Icon} from "../Icon.js";

export class WashingMachine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6H6M17 6"/><rect width="18" height="20" x="3" y="2" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M12 18A2.5 2.5 0 0 0 12 13 2.5 2.5 0 0 1 12 8"/></svg>`
        ).node);
    }
}
