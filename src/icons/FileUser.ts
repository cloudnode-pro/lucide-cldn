import {Icon} from "../Icon.js";

export class FileUser extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2V6A2 2 0 0 0 16 8H20M15 18A3 3 0 1 0 9 18"/><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7z"/><circle cx="12" cy="13" r="2"/></svg>`
        ).node);
    }
}
