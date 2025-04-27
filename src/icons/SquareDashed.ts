import {Icon} from "../Icon.js";

export class SquareDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3A2 2 0 0 0 3 5M19 3A2 2 0 0 1 21 5M21 19A2 2 0 0 1 19 21M5 21A2 2 0 0 1 3 19M9 3H10M9 21H10M14 3H15M14 21H15M3 9V10M21 9V10M3 14V15M21 14V15"/></svg>`
        ).node);
    }
}
