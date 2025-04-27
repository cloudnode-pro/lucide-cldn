import {Icon} from "../Icon.js";

export class UndoDot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17A9 9 0 0 0 6 10.3L3 13"/><path d="M3 7V13H9"/><circle cx="12" cy="17" r="1"/></svg>`
        ).node);
    }
}
