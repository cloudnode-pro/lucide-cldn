import {Icon} from "../Icon.js";

export class PoundSterling extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 7C18 1.7 10 1.7 10 7M10 7V21M6 21H18M6 13H16"/></svg>`
        ).node);
    }
}
