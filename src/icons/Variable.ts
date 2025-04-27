import {Icon} from "../Icon.js";

export class Variable extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 21S4 18 4 12 8 3 8 3M16 3S20 6 20 12 16 21 16 21"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`
        ).node);
    }
}
