import {Icon} from "../Icon.js";

export class Beaker extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.5 3H19.5M6 3V19A2 2 0 0 0 8 21H16A2 2 0 0 0 18 19V3M6 14H18"/></svg>`
        ).node);
    }
}
