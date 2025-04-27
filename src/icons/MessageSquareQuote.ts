import {Icon} from "../Icon.js";

export class MessageSquareQuote extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5z"/><path d="M8 12A2 2 0 0 0 10 10V8H8M14 12A2 2 0 0 0 16 10V8H14"/></svg>`
        ).node);
    }
}
