import {Icon} from "../Icon.js";

export class CupSoda extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 8 7.8 20.3A2 2 0 0 0 9.8 22H14.3A2 2 0 0 0 16.3 20.3L18 8M5 8H19"/><path d="M7 15A7 7 0 0 1 12 15 7 7 0 0 0 17 15M12 8 13 2H15"/></svg>`
        ).node);
    }
}
