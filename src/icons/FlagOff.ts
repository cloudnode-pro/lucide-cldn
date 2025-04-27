import {Icon} from "../Icon.js";

export class FlagOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2C11 2 13 4 16 4S20 3 20 3V14M4 22V4M4 15S5 14 8 14 13 16 16 16"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
