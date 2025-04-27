import {Icon} from "../Icon.js";

export class Leaf extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2 20 4 21 6.2 21 10 21 15.5 16.2 20 11 20"/><path d="M2 21A6 6 0 0 1 7 15C9.6 14.5 12 13 13 12"/></svg>`
        ).node);
    }
}
