import {Icon} from "../Icon.js";

export class ArrowBigLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 15H12V19L5 12 12 5V9H18z"/></svg>`
        ).node);
    }
}
