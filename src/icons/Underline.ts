import {Icon} from "../Icon.js";

export class Underline extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 4V10A6 6 0 0 0 18 10V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg>`
        ).node);
    }
}
