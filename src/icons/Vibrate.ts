import {Icon} from "../Icon.js";

export class Vibrate extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8 4 10 2 12 4 14 2 16M22 8 20 10 22 12 20 14 22 16"/><rect width="8" height="14" x="8" y="5" rx="1"/></svg>`
        ).node);
    }
}
