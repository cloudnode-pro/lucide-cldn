import {Icon} from "../Icon.js";

export class Text extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18H3M17 6H3M21 12H3"/></svg>`
        ).node);
    }
}
