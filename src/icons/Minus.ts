import {Icon} from "../Icon.js";

export class Minus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12H19"/></svg>`
        ).node);
    }
}
