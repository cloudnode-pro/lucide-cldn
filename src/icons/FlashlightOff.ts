import {Icon} from "../Icon.js";

export class FlashlightOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 16V20A2 2 0 0 1 14 22H10A2 2 0 0 1 8 20V10C8 8 6 8 6 6M7 2H18V6C18 8 16 8 16 10V11"/><line x1="11" x2="18" y1="6" y2="6"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
