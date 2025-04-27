import {Icon} from "../Icon.js";

export class FlipHorizontal2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7 8 12 3 17zM21 7 16 12 21 17zM12 20V22M12 14V16M12 8V10M12 2V4"/></svg>`
        ).node);
    }
}
