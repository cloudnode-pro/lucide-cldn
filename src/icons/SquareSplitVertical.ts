import {Icon} from "../Icon.js";

export class SquareSplitVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 8V5C5 4 6 3 7 3H17C18 3 19 4 19 5V8M19 16V19C19 20 18 21 17 21H7C6 21 5 20 5 19V16"/><line x1="4" x2="20" y1="12" y2="12"/></svg>`
        ).node);
    }
}
