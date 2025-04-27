import {Icon} from "../Icon.js";

export class ListFilterPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18H14M11 6H3M15 6H21M18 9V3M7 12H15"/></svg>`
        ).node);
    }
}
