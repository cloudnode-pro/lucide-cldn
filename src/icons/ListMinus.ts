import {Icon} from "../Icon.js";

export class ListMinus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 12H3M16 6H3M16 18H3M21 12H15"/></svg>`
        ).node);
    }
}
