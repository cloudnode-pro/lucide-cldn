import {Icon} from "../Icon.js";

export class Heading extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 12H18M6 20V4M18 20V4"/></svg>`
        ).node);
    }
}
