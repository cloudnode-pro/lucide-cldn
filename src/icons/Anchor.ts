import {Icon} from "../Icon.js";

export class Anchor extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22V8M5 12H2A10 10 0 0 0 22 12H19"/><circle cx="12" cy="5" r="3"/></svg>`
        ).node);
    }
}
