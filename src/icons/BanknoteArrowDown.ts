import {Icon} from "../Icon.js";

export class BanknoteArrowDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6H20A2 2 0 0 1 22 8V13M16 19 19 22 22 19M19 16V22M6 12"/><circle cx="12" cy="12" r="2"/></svg>`
        ).node);
    }
}
