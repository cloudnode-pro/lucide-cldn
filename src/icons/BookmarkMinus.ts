import {Icon} from "../Icon.js";

export class BookmarkMinus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21 12 17 5 21V5A2 2 0 0 1 7 3H17A2 2 0 0 1 19 5z"/><line x1="15" x2="9" y1="10" y2="10"/></svg>`
        ).node);
    }
}
