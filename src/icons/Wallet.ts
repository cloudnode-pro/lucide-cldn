import {Icon} from "../Icon.js";

export class Wallet extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7V4A1 1 0 0 0 18 3H5A2 2 0 0 0 5 7H20A1 1 0 0 1 21 8V12H18A2 2 0 0 0 18 16H21A1 1 0 0 0 22 15V13A1 1 0 0 0 21 12"/><path d="M3 5V19A2 2 0 0 0 5 21H20A1 1 0 0 0 21 20V16"/></svg>`
        ).node);
    }
}
