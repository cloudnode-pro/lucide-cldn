import {Icon} from "../Icon.js";

export class FileSliders extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7Z"/><path d="M14 2V6A2 2 0 0 0 16 8H20M8 12H16M10 11V13M8 17H16M14 16V18"/></svg>`
        ).node);
    }
}
