import {Icon} from "../Icon.js";

export class MessageSquareCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7.5 8 10 10 12.5M14 7.5 16 10 14 12.5"/><path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5z"/></svg>`
        ).node);
    }
}
