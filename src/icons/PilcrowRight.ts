import {Icon} from "../Icon.js";

export class PilcrowRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 3V14M10 9H7A1 1 0 0 1 7 3H15M14 3V14M18 14 22 18H2M22 18 18 22"/></svg>`
        ).node);
    }
}
