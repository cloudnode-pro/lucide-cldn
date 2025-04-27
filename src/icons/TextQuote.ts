import {Icon} from "../Icon.js";

export class TextQuote extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 6H3M21 12H8M21 18H8M3 12V18"/></svg>`
        ).node);
    }
}
