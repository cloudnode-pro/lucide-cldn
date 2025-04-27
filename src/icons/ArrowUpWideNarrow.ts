import {Icon} from "../Icon.js";

export class ArrowUpWideNarrow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8 7 4 11 8M7 4V20M11 12H21M11 16H18M11 20H15"/></svg>`
        ).node);
    }
}
