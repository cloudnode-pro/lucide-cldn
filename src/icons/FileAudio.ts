import {Icon} from "../Icon.js";

export class FileAudio extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V7"/><path d="M14 2V6A2 2 0 0 0 16 8H20M2 19A2 2 0 1 1 6 19V20A2 2 0 1 1 2 20V16A6 6 0 0 1 14 16V20A2 2 0 1 1 10 20V19A2 2 0 1 1 14 19"/></svg>`
        ).node);
    }
}
