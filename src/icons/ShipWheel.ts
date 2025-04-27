import {Icon} from "../Icon.js";

export class ShipWheel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 2V9.5M19 5 13.8 10.2M22 12H14.5M19 19 13.8 13.8M12 14.5V22M10.2 13.8 5 19M9.5 12H2M10.2 10.2 5 5"/><circle cx="12" cy="12" r="2.5"/></svg>`
        ).node);
    }
}
