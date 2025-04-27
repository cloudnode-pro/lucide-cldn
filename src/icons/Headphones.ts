import {Icon} from "../Icon.js";

export class Headphones extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 14H6A2 2 0 0 1 8 16V19A2 2 0 0 1 6 21H5A2 2 0 0 1 3 19V12A9 9 0 0 1 21 12V19A2 2 0 0 1 19 21H18A2 2 0 0 1 16 19V16A2 2 0 0 1 18 14H21"/></svg>`
        ).node);
    }
}
