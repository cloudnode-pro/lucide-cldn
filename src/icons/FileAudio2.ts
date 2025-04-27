import {Icon} from "../Icon.js";

export class FileAudio2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V6"/><path d="M14 2V6A2 2 0 0 0 16 8H20"/><circle cx="3" cy="17" r="1"/><path d="M2 17V14A4 4 0 0 1 10 14V17"/><circle cx="9" cy="17" r="1"/></svg>`
        ).node);
    }
}
