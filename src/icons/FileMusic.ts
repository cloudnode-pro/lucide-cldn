import {Icon} from "../Icon.js";

export class FileMusic extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V12.4"/><path d="M8 18V10.3L16 9V16"/><circle cx="14" cy="16" r="2"/><circle cx="6" cy="18" r="2"/></svg>`
        ).node);
    }
}
