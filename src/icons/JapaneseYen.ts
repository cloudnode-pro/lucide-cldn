import {Icon} from "../Icon.js";

export class JapaneseYen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9.5V21M12 9.5 6 3M12 9.5 18 3M6 15H18M6 11H18"/></svg>`
        ).node);
    }
}
