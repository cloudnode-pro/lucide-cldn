import {Icon} from "../Icon.js";

export class SquareDashedBottom extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 21A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21M9 21H10M14 21H15"/></svg>`
        ).node);
    }
}
