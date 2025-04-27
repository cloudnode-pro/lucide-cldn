import {Icon} from "../Icon.js";

export class BookmarkX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21 12 17 5 21V5A2 2 0 0 1 7 3H17A2 2 0 0 1 19 5ZM14.5 7.5 9.5 12.5M9.5 7.5 14.5 12.5"/></svg>`
        ).node);
    }
}
