import {Icon} from "../Icon.js";

export class SquareDashedKanban extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V14M12 7V11M16 7V16M5 3A2 2 0 0 0 3 5M9 3H10M14 3H15M19 3A2 2 0 0 1 21 5M21 9V10M21 14V15M21 19A2 2 0 0 1 19 21M14 21H15M9 21H10M5 21A2 2 0 0 1 3 19M3 14V15M3 9V10"/></svg>`
        ).node);
    }
}
