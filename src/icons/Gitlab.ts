import {Icon} from "../Icon.js";

export class Gitlab extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13.3 18.7 3.3 18.5 3H18.1L17.9 3.3 15.7 10H8.3L6.1 3.3 6 3H5.5L5.4 3.3 2 13.3A1 1 0 0 0 2.3 14.3L12 21 21.7 14.1z"/></svg>`
        ).node);
    }
}
