import {Icon} from "../Icon.js";

export class Cast extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8V6A2 2 0 0 1 4 4H20A2 2 0 0 1 22 6V18A2 2 0 0 1 20 20H14M2 12A9 9 0 0 1 10 20M2 16A5 5 0 0 1 6 20"/><line x1="2" x2="2" y1="20" y2="20"/></svg>`
        ).node);
    }
}
