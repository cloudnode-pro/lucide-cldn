import {Icon} from "../Icon.js";

export class MessageCircleX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22ZM15 9 9 15M9 9 15 15"/></svg>`
        ).node);
    }
}
