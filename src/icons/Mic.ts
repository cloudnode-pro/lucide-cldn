import {Icon} from "../Icon.js";

export class Mic extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2A3 3 0 0 0 9 5V12A3 3 0 0 0 15 12V5A3 3 0 0 0 12 2"/><path d="M19 10V12A7 7 0 0 1 5 12V10"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`
        ).node);
    }
}
