import {Icon} from "../Icon.js";

export class AlignCenterHorizontal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12H22M10 16V20A2 2 0 0 1 8 22H6A2 2 0 0 1 4 20V16M10 8V4A2 2 0 0 0 8 2H6A2 2 0 0 0 4 4V8M20 16V17A2 2 0 0 1 18 19H16A2 2 0 0 1 14 17V16M14 8V7Q14.2 5.2 16 5H18A2 2 0 0 1 20 7V8"/></svg>`
        ).node);
    }
}
