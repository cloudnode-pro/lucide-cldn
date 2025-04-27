import {Icon} from "../Icon.js";

export class FoldHorizontal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12H8M22 12H16M12 2V4M12 8V10M12 14V16M12 20V22M19 9 16 12 19 15M5 15 8 12 5 9"/></svg>`
        ).node);
    }
}
