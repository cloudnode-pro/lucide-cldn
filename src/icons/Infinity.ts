import {Icon} from "../Icon.js";

export class Infinity extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 16C11 16 13 8 18 8A4 4 0 0 1 18 16C13 16 11 8 6 8A4 4 0 1 0 6 16"/></svg>`
        ).node);
    }
}
