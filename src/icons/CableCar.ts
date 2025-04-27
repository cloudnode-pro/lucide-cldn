import {Icon} from "../Icon.js";

export class CableCar extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9 22 4M12 12V6.5"/><rect width="16" height="10" x="4" y="12" rx="3"/><path d="M9 12V17M15 12V17M4 17H20"/></svg>`
        ).node);
    }
}
