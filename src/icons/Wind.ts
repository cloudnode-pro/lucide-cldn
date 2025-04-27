import {Icon} from "../Icon.js";

export class Wind extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.8 19.6A2 2 0 1 0 14 16H2M17.5 8A2.5 2.5 0 1 1 19.5 12H2M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>`
        ).node);
    }
}
