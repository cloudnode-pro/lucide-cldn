import {Icon} from "../Icon.js";

export class Printer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18H4A2 2 0 0 1 2 16V11A2 2 0 0 1 4 9H20A2 2 0 0 1 22 11V16A2 2 0 0 1 20 18H18M6 9V3A1 1 0 0 1 7 2H17A1 1 0 0 1 18 3V9"/><rect width="12" height="8" x="6" y="14" rx="1"/></svg>`
        ).node);
    }
}
