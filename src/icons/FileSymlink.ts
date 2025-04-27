import {Icon} from "../Icon.js";

export class FileSymlink extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18 13 15 10 12M14 2V6A2 2 0 0 0 16 8H20"/><path d="M4 11V4A2 2 0 0 1 6 2H15L20 7V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V17A2 2 0 0 1 6 15H13"/></svg>`
        ).node);
    }
}
