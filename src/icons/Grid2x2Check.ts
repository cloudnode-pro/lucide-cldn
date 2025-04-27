import {Icon} from "../Icon.js";

export class Grid2x2Check extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3V20A1 1 0 0 1 11 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V11A1 1 0 0 1 20 12H3M16 19 18 21 22 17"/></svg>`
        ).node);
    }
}
