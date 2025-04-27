import {Icon} from "../Icon.js";

export class HandMetal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 12.5V10A2 2 0 0 0 16 8 2 2 0 0 0 14 10V11.4M14 11V9A2 2 0 1 0 10 9V11M10 10.5V5A2 2 0 1 0 6 5V14"/><path d="M7 15 5.2 13.2A2 2 0 0 0 2.4 16.1L6 19.7A8 8 0 0 0 12 22H14A8 8 0 0 0 22 14V7A2 2 0 1 0 18 7V12"/></svg>`
        ).node);
    }
}
