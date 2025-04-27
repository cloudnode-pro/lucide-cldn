import {Icon} from "../Icon.js";

export class SquareArrowOutUpRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 13V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H11M21 3 12 12M15 3H21V9"/></svg>`
        ).node);
    }
}
