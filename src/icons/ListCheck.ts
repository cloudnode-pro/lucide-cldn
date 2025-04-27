import {Icon} from "../Icon.js";

export class ListCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 18H3M15 18 17 20 21 16M16 12H3M16 6H3"/></svg>`
        ).node);
    }
}
