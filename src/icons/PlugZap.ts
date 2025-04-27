import {Icon} from "../Icon.js";

export class PlugZap extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6.3 20.3A2.4 2.4 0 0 0 9.7 20.3L12 18 6 12 3.7 14.3A2.4 2.4 0 0 0 3.7 17.7ZM2 22 5 19M7.5 13.5 10 11M10.5 16.5 13 14M18 3 14 7H20L16 11"/></svg>`
        ).node);
    }
}
