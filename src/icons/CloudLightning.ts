import {Icon} from "../Icon.js";

export class CloudLightning extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 16.3A7 7 0 1 1 15.7 8H17.5A4.5 4.5 0 0 1 18 17"/><path d="M13 12 10 17H14L11 22"/></svg>`
        ).node);
    }
}
