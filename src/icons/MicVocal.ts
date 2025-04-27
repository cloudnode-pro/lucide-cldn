import {Icon} from "../Icon.js";

export class MicVocal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 7.6 5 15.8A1 1 0 0 0 5.1 17L6 17.9A1 1 0 0 0 7.2 18L15.1 12"/><path d="M16.5 21.2Q15.1 20 13 20C11 20 9 22.4 7 22S4.2 18.6 5.5 17.5"/><circle cx="16" cy="7" r="5"/></svg>`
        ).node);
    }
}
