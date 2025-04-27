import {Icon} from "../Icon.js";

export class Repeat1 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 2 21 6 17 10"/><path d="M3 11V10A4 4 0 0 1 7 6H21M7 22 3 18 7 14"/><path d="M21 13V14A4 4 0 0 1 17 18H3M11 10H12V14"/></svg>`
        ).node);
    }
}
