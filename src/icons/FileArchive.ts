import {Icon} from "../Icon.js";

export class FileArchive extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12V11M10 18V16M10 7V6M14 2V6A2 2 0 0 0 16 8H20"/><path d="M15.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V20L4.3 21"/><circle cx="10" cy="20" r="2"/></svg>`
        ).node);
    }
}
