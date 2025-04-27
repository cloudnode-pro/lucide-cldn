import {Icon} from "../Icon.js";

export class SquareSplitHorizontal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 19H5C4 19 3 18 3 17V7C3 6 4 5 5 5H8M16 5H19C20 5 21 6 21 7V17C21 18 20 19 19 19H16"/><line x1="12" x2="12" y1="4" y2="20"/></svg>`
        ).node);
    }
}
