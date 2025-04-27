import {Icon} from "../Icon.js";

export class Shredder extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22V17M14 19V17M14 2V6A2 2 0 0 0 16 8H20M18 20V17M2 13H22"/><path d="M20 13V7L15 2H6A2 2 0 0 0 4 4V13M6 20V17"/></svg>`
        ).node);
    }
}
