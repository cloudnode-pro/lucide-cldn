import {Icon} from "../Icon.js";

export class RotateCwSquare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5H6A2 2 0 0 0 4 7V10"/><path d="M9 8 12 5 9 2M4 14V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V7A2 2 0 0 0 18 5H16"/></svg>`
        ).node);
    }
}
