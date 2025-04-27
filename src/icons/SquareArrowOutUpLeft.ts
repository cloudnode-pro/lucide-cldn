import {Icon} from "../Icon.js";

export class SquareArrowOutUpLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V13M3 3 12 12M3 9V3H9"/></svg>`
        ).node);
    }
}
