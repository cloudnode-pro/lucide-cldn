import {Icon} from "../Icon.js";

export class Aperture extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14.3 8 20.1 18M9.7 8H21.2M7.4 12 13 2M9.7 16 4 6M14.3 16H2.8M16.6 12 11 22"/></svg>`
        ).node);
    }
}
