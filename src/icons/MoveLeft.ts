import {Icon} from "../Icon.js";

export class MoveLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 8 2 12 6 16M2 12H22"/></svg>`
        ).node);
    }
}
