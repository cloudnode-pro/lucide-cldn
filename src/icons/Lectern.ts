import {Icon} from "../Icon.js";

export class Lectern extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12H19A2 2 0 0 0 20.9 10.6L21.9 7.3A1 1 0 0 0 21 6H3A1 1 0 0 0 2 7.3L3.1 10.6A2 2 0 0 0 5 12H8"/><path d="M18 6V3A1 1 0 0 0 17 2H14"/><rect width="8" height="12" x="8" y="10" rx="1"/></svg>`
        ).node);
    }
}
