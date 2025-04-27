import {Icon} from "../Icon.js";

export class FileLock2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V5"/><path d="M14 2V6A2 2 0 0 0 16 8H20"/><rect width="8" height="5" x="2" y="13" rx="1"/><path d="M8 13V11A2 2 0 1 0 4 11V13"/></svg>`
        ).node);
    }
}
