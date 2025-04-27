import {Icon} from "../Icon.js";

export class ListCollapse extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10 5.5 7.5 3 5M3 19 5.5 16.5 3 14M10 6H21M10 12H21M10 18H21"/></svg>`
        ).node);
    }
}
