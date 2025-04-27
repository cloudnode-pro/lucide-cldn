import {Icon} from "../Icon.js";

export class ListX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 12H3M16 6H3M16 18H3M19 10 15 14M15 10 19 14"/></svg>`
        ).node);
    }
}
