import {Icon} from "../Icon.js";

export class MessageSquareShare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12V15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H12M16 3H21V8M16 8 21 3"/></svg>`
        ).node);
    }
}
