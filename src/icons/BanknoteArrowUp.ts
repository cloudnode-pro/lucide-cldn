import {Icon} from "../Icon.js";

export class BanknoteArrowUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6H20A2 2 0 0 1 22 8V13M19 22V16M22 19 19 16 16 19M6 12"/><circle cx="12" cy="12" r="2"/></svg>`
        ).node);
    }
}
