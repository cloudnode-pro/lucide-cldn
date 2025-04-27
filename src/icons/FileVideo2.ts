import {Icon} from "../Icon.js";

export class FileVideo2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V8"/><path d="M14 2V6A2 2 0 0 0 16 8H20"/><rect width="8" height="6" x="2" y="12" rx="1"/><path d="M10 15.5 14 18V12L10 14.5"/></svg>`
        ).node);
    }
}
