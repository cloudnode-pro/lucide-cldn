import {Icon} from "../Icon.js";

export class Pilcrow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 4V20M17 4V20M19 4H9.5A4.5 4.5 0 0 0 9.5 13H13"/></svg>`
        ).node);
    }
}
