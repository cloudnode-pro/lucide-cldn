import {Icon} from "../Icon.js";

export class FileImage extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7Z"/><path d="M14 2V6A2 2 0 0 0 16 8H20"/><circle cx="10" cy="12" r="2"/><path d="M20 17 18.7 15.7A2.4 2.4 0 0 0 15.3 15.7L9 22"/></svg>`
        ).node);
    }
}
