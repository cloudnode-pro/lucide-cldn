import {Icon} from "../Icon.js";

export class Ampersand extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 12A8 8 0 0 1 9.5 20 4.5 4.5 0 0 1 5 15.5C5 9.5 13 11.5 13 7A3 3 0 1 0 7 7C7 10 9.5 15.5 19 20M16 12H19"/></svg>`
        ).node);
    }
}
