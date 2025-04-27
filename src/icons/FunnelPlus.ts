import {Icon} from "../Icon.js";

export class FunnelPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.4 3H3A1 1 0 0 0 2.3 4.7L9.5 12.7A2 2 0 0 1 10 14V20A1 1 0 0 0 10.6 20.9L12.6 21.9A1 1 0 0 0 14 21V14A2 2 0 0 1 14.5 12.7L15.7 11.3M16 6H22M19 3V9"/></svg>`
        ).node);
    }
}
