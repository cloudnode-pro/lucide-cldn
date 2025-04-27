import {Icon} from "../Icon.js";

export class LetterText extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12H21M15 6H21M3 13 6.6 5.3A.5.5 0 0 1 7.4 5.3L11 13M3 18H21M4 11H10"/></svg>`
        ).node);
    }
}
