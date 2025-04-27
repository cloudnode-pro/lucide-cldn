import {Icon} from "../Icon.js";

export class Fence extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 3 2 5V20Q2 21 3 21H5Q6 21 6 20V5ZM6 8H10M6 18H10M12 3 10 5V20Q10 21 11 21H13Q14 21 14 20V5ZM14 8H18M14 18H18M20 3 18 5V20Q18 21 19 21H21Q22 21 22 20V5Z"/></svg>`
        ).node);
    }
}
