import {Icon} from "../Icon.js";

export class MessageCircleHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2A2.5 2.5 0 0 0 12.3 9.2L12 9.6 11.7 9.3A2.4 2.4 0 1 0 8.5 12.9L12 16.4 15.7 12.9Q17.3 10.9 15.8 9.2"/></svg>`
        ).node);
    }
}
