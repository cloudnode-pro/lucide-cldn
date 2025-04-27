import {Icon} from "../Icon.js";

export class MessageCircleCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9.5 8 12 10 14.5M14 9.5 16 12 14 14.5"/><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/></svg>`
        ).node);
    }
}
