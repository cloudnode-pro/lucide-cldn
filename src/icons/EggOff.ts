import {Icon} from "../Icon.js";

export class EggOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6.4 6.4Q4.8 9.2 4.5 12C4.1 16.4 5.8 22 12 22 15.3 22 17.3 20.5 18.4 18.4M19.5 13.9V12C19.1 7.7 15.5 2 12 2Q10.5 2 9 3.3"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
