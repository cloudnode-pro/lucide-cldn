import {Icon} from "../Icon.js";

export class SquaresUnite extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16A2 2 0 0 1 2 14V4A2 2 0 0 1 4 2H14A2 2 0 0 1 16 4V7A1 1 0 0 0 17 8H20A2 2 0 0 1 22 10V20A2 2 0 0 1 20 22H10A2 2 0 0 1 8 20V17A1 1 0 0 0 7 16z"/></svg>`
        ).node);
    }
}
