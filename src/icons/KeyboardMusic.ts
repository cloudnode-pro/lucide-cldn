import {Icon} from "../Icon.js";

export class KeyboardMusic extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8H10M2 12H22M6 12V16M10 12V16M14 12V16M18 12V16"/></svg>`
        ).node);
    }
}
