import {Icon} from "../Icon.js";

export class FlipHorizontal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3H5A2 2 0 0 0 3 5V19Q3.2 20.8 5 21H8M16 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H16M12 20V22M12 14V16M12 8V10M12 2V4"/></svg>`
        ).node);
    }
}
