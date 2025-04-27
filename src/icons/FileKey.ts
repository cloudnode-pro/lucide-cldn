import {Icon} from "../Icon.js";

export class FileKey extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7Z"/><circle cx="10" cy="16" r="2"/><path d="M16 10 11.5 14.5M15 11 16 12"/></svg>`
        ).node);
    }
}
