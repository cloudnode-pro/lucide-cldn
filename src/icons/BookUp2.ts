import {Icon} from "../Icon.js";

export class BookUp2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V7M18 2H19A1 1 0 0 1 20 3V21A1 1 0 0 1 19 22H6.5A1 1 0 0 1 6.5 17H20"/><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2M9 10 12 7 15 10M9 5 12 2 15 5"/></svg>`
        ).node);
    }
}
