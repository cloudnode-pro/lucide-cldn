import {Icon} from "../Icon.js";

export class Sandwich extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.4 11.2 10.7 4.4A2 2 0 0 1 13.3 4.4L21.6 11.2M21 15A1 1 0 0 1 22 16V18A1 1 0 0 1 21 19H15.8M3 15A1 1 0 0 0 2 16V18A1 1 0 0 0 3 19H12M6.7 15 12.8 19.6A2 2 0 0 0 15.6 19.2L18.8 15"/><rect width="20" height="4" x="2" y="11" rx="1"/></svg>`
        ).node);
    }
}
