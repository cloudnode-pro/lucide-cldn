import {Icon} from "../Icon.js";

export class ArrowBigRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9H12V5L19 12 12 19V15H6z"/></svg>`
        ).node);
    }
}
