import {Icon} from "../Icon.js";

export class PilcrowLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 3V14M14 9H11A3 3 0 0 1 11 3H20M18 3V14M22 18H2L6 14M6 22 2 18"/></svg>`
        ).node);
    }
}
