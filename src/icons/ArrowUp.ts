import {Icon} from "../Icon.js";

export class ArrowUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12 12 5 19 12M12 19V5"/></svg>`
        ).node);
    }
}
