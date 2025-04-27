import {Icon} from "../Icon.js";

export class SquaresExclude extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12V14A2 2 0 0 1 14 16H9A1 1 0 0 0 8 17V20A2 2 0 0 0 10 22H20A2 2 0 0 0 22 20V10A2 2 0 0 0 20 8H20M4 16A2 2 0 0 1 2 14V4A2 2 0 0 1 4 2H14A2 2 0 0 1 16 4V7A1 1 0 0 1 15 8H10A2 2 0 0 0 8 10V12"/></svg>`
        ).node);
    }
}
