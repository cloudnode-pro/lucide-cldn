import {Icon} from "../Icon.js";

export class TramFront extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11H20M12 3V11M8 19 6 22M18 22 16 19M16 15"/></svg>`
        ).node);
    }
}
