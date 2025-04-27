import {Icon} from "../Icon.js";

export class Caravan extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 19V9A4 4 0 0 0 14 5H6A4 4 0 0 0 2 9V17A2 2 0 0 0 4 19H6"/><path d="M2 9H5A1 1 0 0 1 6 10V12A1 1 0 0 1 5 13H2M22 17V18A1 1 0 0 1 21 19H10V10A1 1 0 0 1 11 9H13A1 1 0 0 1 14 10V19"/><circle cx="8" cy="19" r="2"/></svg>`
        ).node);
    }
}
