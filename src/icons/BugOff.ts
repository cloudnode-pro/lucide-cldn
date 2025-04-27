import {Icon} from "../Icon.js";

export class BugOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 7.1V6A3 3 0 0 0 9.9 3.9L8 2M14.1 3.9 16 2"/><path d="M22 13H18V11A4 4 0 0 0 14 7H12.7"/><path d="M21 5A4 4 0 0 1 17.5 9M2 2 22 22M7.7 7.7A4 4 0 0 0 6 11V14A6 6 0 0 0 17.1 17.1M12 20V12M6 13H2"/><path d="M3 21A4 4 0 0 1 6.8 17"/></svg>`
        ).node);
    }
}
