import {Icon} from "../Icon.js";

export class TextSelect extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 21H15M14 3H15M19 3A2 2 0 0 1 21 5M21 14V15M21 19A2 2 0 0 1 19 21M21 9V10M3 14V15M3 9V10M5 21A2 2 0 0 1 3 19M5 3A2 2 0 0 0 3 5M7 12H17M7 16H13M7 8H15M9 21H10M9 3H10"/></svg>`
        ).node);
    }
}
