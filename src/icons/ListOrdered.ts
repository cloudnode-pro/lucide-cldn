import {Icon} from "../Icon.js";

export class ListOrdered extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12H21M10 18H21M10 6H21M4 10H6M4 6H5V10M6 18H4C4 17 6 16 6 15S5 13.5 4 14"/></svg>`
        ).node);
    }
}
