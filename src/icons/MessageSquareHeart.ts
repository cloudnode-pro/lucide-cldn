import {Icon} from "../Icon.js";

export class MessageSquareHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5z"/><path d="M14.8 7.5A2 2 0 0 0 12.2 7.5L12 7.8 11.7 7.5A1.8 1.8 0 1 0 9.3 10.3L12 13 14.7 10.3C15.6 9.4 15.5 8.2 14.8 7.5"/></svg>`
        ).node);
    }
}
