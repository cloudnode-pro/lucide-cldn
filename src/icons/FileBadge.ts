import {Icon} from "../Icon.js";

export class FileBadge extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V7"/><path d="M14 2V6A2 2 0 0 0 16 8H20M5 17A3 3 0 1 0 5 11 3 3 0 0 0 5 17"/><path d="M7 16.5 8 22 5 21 2 22 3 16.5"/></svg>`
        ).node);
    }
}
