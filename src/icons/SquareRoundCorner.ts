import {Icon} from "../Icon.js";

export class SquareRoundCorner extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11A8 8 0 0 0 13 3M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H9"/></svg>`
        ).node);
    }
}
