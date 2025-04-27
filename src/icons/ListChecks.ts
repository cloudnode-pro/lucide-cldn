import {Icon} from "../Icon.js";

export class ListChecks extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 17 5 19 9 15M3 7 5 9 9 5M13 6H21M13 12H21M13 18H21"/></svg>`
        ).node);
    }
}
