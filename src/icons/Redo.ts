import {Icon} from "../Icon.js";

export class Redo extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7V13H15"/><path d="M3 17A9 9 0 0 1 12 8 9 9 0 0 1 18 10.3L21 13"/></svg>`
        ).node);
    }
}
