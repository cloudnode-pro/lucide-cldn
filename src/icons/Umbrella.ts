import {Icon} from "../Icon.js";

export class Umbrella extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12A10 10 1 0 0 2 12ZM12 12V20A2 2 0 0 0 16 20M12 2V3"/></svg>`
        ).node);
    }
}
