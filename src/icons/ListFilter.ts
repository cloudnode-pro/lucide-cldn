import {Icon} from "../Icon.js";

export class ListFilter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6H21M7 12H17M10 18H14"/></svg>`
        ).node);
    }
}
