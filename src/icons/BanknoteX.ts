import {Icon} from "../Icon.js";

export class BanknoteX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6H20A2 2 0 0 1 22 8V13M17 17 22 22M22 17 17 22M6 12"/><circle cx="12" cy="12" r="2"/></svg>`
        ).node);
    }
}
