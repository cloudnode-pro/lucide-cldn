import {Icon} from "../Icon.js";

export class Option extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3H9L15 21H21M14 3H21"/></svg>`
        ).node);
    }
}
