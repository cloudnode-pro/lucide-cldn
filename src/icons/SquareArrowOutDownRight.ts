import {Icon} from "../Icon.js";

export class SquareArrowOutDownRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11V5A2 2 0 0 0 19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H11M21 21 12 12M21 15V21H15"/></svg>`
        ).node);
    }
}
