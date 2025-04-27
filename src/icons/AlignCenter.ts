import {Icon} from "../Icon.js";

export class AlignCenter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12H7M19 18H5M21 6H3"/></svg>`
        ).node);
    }
}
