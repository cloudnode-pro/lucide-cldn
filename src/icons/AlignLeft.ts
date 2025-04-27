import {Icon} from "../Icon.js";

export class AlignLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12H3M17 18H3M21 6H3"/></svg>`
        ).node);
    }
}
