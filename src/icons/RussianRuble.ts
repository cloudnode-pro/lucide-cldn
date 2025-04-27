import {Icon} from "../Icon.js";

export class RussianRuble extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 11H14A4 4 0 0 0 14 3H9V21M6 15H14"/></svg>`
        ).node);
    }
}
