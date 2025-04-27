import {Icon} from "../Icon.js";

export class BookDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17H13.5M12 22H13.5M12 2H13.5M17.5 22H19A1 1 0 0 0 20 21M17.5 2H19A1 1 0 0 1 20 3V4.5M20 14V17H17.5M20 8.5V10M4 10V8.5M4 19.5V14M4 4.5A2.5 2.5 0 0 1 6.5 2H8M8 22H6.5A1 1 0 0 1 6.5 17H8"/></svg>`
        ).node);
    }
}
