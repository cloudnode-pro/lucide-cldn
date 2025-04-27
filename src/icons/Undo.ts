import {Icon} from "../Icon.js";

export class Undo extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V13H9"/><path d="M21 17A9 9 0 0 0 12 8 9 9 0 0 0 6 10.3L3 13"/></svg>`
        ).node);
    }
}
