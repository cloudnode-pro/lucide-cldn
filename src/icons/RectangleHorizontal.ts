import {Icon} from "../Icon.js";

export class RectangleHorizontal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/></svg>`
        ).node);
    }
}
