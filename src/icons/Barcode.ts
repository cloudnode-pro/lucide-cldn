import {Icon} from "../Icon.js";

export class Barcode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5V19M8 5V19M12 5V19M17 5V19M21 5V19"/></svg>`
        ).node);
    }
}
