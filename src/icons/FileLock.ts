import {Icon} from "../Icon.js";

export class FileLock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7Z"/><rect width="8" height="6" x="8" y="12" rx="1"/><path d="M10 12V10A2 2 0 1 1 14 10V12"/></svg>`
        ).node);
    }
}
