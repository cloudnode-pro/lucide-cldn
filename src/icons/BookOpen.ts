import {Icon} from "../Icon.js";

export class BookOpen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7V21M3 18A1 1 0 0 1 2 17V4A1 1 0 0 1 3 3H8A4 4 0 0 1 12 7 4 4 0 0 1 16 3H21A1 1 0 0 1 22 4V17A1 1 0 0 1 21 18H15A3 3 0 0 0 12 21 3 3 0 0 0 9 18z"/></svg>`
        ).node);
    }
}
