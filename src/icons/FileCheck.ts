import {Icon} from "../Icon.js";

export class FileCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7Z"/><path d="M14 2V6A2 2 0 0 0 16 8H20M9 15 11 17 15 13"/></svg>`
        ).node);
    }
}
