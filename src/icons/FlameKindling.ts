import {Icon} from "../Icon.js";

export class FlameKindling extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C13 5 14.5 5.5 15.5 6.5A5 5 0 0 1 17 10 5 5 0 1 1 7 10L7.1 9.1A2 2 0 1 0 10.4 7.1C8 4.5 11 2 12 2M5 22 19 18M5 18 19 22"/></svg>`
        ).node);
    }
}
