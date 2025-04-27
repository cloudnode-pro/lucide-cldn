import {Icon} from "../Icon.js";

export class Gem extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3H18L22 9 12 22 2 9Z"/><path d="M11 3 8 9 12 22 16 9 13 3M2 9H22"/></svg>`
        ).node);
    }
}
