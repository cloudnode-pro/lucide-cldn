import {Icon} from "../Icon.js";

export class SquareDashedMousePointer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12.7A.5.5 0 0 1 12.7 12L21.7 15.5A.5.5 0 0 1 21.7 16.5L18.1 17.5A1 1 0 0 0 17.5 18.2L16.5 21.6A.5.5 0 0 1 15.5 21.6zM5 3A2 2 0 0 0 3 5M19 3A2 2 0 0 1 21 5M5 21A2 2 0 0 1 3 19M9 3H10M9 21H11M14 3H15M3 9V10M21 9V11M3 14V15"/></svg>`
        ).node);
    }
}
