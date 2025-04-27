import {Icon} from "../Icon.js";

export class Bold extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 12H15A4 4 0 0 1 15 20H7A1 1 0 0 1 6 19V5A1 1 0 0 1 7 4H14A4 4 0 0 1 14 12"/></svg>`
        ).node);
    }
}
