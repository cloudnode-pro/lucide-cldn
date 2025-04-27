import {Icon} from "../Icon.js";

export class Package2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9H21V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19zM3 9 5.5 4.1A2 2 0 0 1 7.2 3H16.8A2 2 0 0 1 18.6 4.1L21 9M12 3V9"/></svg>`
        ).node);
    }
}
