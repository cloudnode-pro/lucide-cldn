import {Icon} from "../Icon.js";

export class CircleParkingOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M5 5 19 19M13 13A3 3 0 1 0 13 7H9V9M9 17V14.7"/></svg>`
        ).node);
    }
}
