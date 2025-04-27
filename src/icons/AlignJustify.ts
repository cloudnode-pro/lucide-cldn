import {Icon} from "../Icon.js";

export class AlignJustify extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12H21M3 18H21M3 6H21"/></svg>`
        ).node);
    }
}
