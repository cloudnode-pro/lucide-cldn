import {Icon} from "../Icon.js";

export class SpellCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 16 12 4 18 16M8 12H16M16 20 18 22 22 18"/></svg>`
        ).node);
    }
}
