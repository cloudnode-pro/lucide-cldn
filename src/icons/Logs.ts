import {Icon} from "../Icon.js";

export class Logs extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 12H21M13 18H21M13 6H21M3 12H4M3 18H4M3 6H4M8 12H9M8 18H9M8 6H9"/></svg>`
        ).node);
    }
}
