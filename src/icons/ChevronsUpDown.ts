import {Icon} from "../Icon.js";

export class ChevronsUpDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 15 12 20 17 15M7 9 12 4 17 9"/></svg>`
        ).node);
    }
}
