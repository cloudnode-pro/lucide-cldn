import {Icon} from "../Icon.js";

export class FileSearch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2V6A2 2 0 0 0 16 8H20"/><path d="M4.3 21A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V7M9 18 7.5 16.5"/><circle cx="5" cy="14" r="3"/></svg>`
        ).node);
    }
}
