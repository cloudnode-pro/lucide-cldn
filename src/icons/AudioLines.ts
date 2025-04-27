import {Icon} from "../Icon.js";

export class AudioLines extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 10V13M6 6V17M10 3V21M14 8V15M18 5V18M22 10V13"/></svg>`
        ).node);
    }
}
