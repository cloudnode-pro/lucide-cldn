import {Icon} from "../Icon.js";

export class ChevronsDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 6 12 11 17 6M7 13 12 18 17 13"/></svg>`
        ).node);
    }
}
