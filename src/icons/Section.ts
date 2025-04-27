import {Icon} from "../Icon.js";

export class Section extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5A4 3 0 0 0 8 5C8 9 16 8 16 12A4 3 0 0 1 8 12"/><path d="M8 19A4 3 0 0 0 16 19C16 15 8 16 8 12A4 3 0 0 1 16 12"/></svg>`
        ).node);
    }
}
