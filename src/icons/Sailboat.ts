import {Icon} from "../Icon.js";

export class Sailboat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 18H2A4 4 0 0 0 6 22H18A4 4 0 0 0 22 18M21 14 10 2 3 14zM10 2V18"/></svg>`
        ).node);
    }
}
