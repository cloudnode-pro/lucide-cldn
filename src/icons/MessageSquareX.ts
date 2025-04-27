import {Icon} from "../Icon.js";

export class MessageSquareX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5zM14.5 7.5 9.5 12.5M9.5 7.5 14.5 12.5"/></svg>`
        ).node);
    }
}
