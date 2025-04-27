import {Icon} from "../Icon.js";

export class Earth extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.5 15H17A2 2 0 0 0 15 17V21.5M7 3.3V5A3 3 0 0 0 10 8 2 2 0 0 1 12 10Q12.2 11.8 14 12A2 2 0 0 0 16 10Q16.2 8.2 18 8H21.2M11 22V18A2 2 0 0 0 9 16 2 2 0 0 1 7 14V13A2 2 0 0 0 5 11H2"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
