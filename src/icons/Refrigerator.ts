import {Icon} from "../Icon.js";

export class Refrigerator extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 6A4 4 0 0 1 9 2H15A4 4 0 0 1 19 6V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20zM5 10H19M15 7V13"/></svg>`
        ).node);
    }
}
