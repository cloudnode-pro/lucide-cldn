import {Icon} from "../Icon.js";

export class Parentheses extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 21S4 18 4 12 8 3 8 3M16 3S20 6 20 12 16 21 16 21"/></svg>`
        ).node);
    }
}
