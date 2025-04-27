import {Icon} from "../Icon.js";

export class MessageCircleReply extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M10 15 7 12 10 9"/><path d="M7 12H14A2 2 0 0 1 16 14V15"/></svg>`
        ).node);
    }
}
