import {Icon} from "../Icon.js";

export class List extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 12H21M8 18H21M8 6H21"/></svg>`
        ).node);
    }
}
