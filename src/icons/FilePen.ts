import {Icon} from "../Icon.js";

export class FilePen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V13.5"/><path d="M14 2V6A2 2 0 0 0 16 8H20M13.4 15.6A1 1 0 1 0 10.4 12.6L5.4 17.6 4.9 18.5 4 21.4A.5.5 0 0 0 4.6 22L7.6 21 8.3 20.6z"/></svg>`
        ).node);
    }
}
