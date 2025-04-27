import {Icon} from "../Icon.js";

export class Nfc extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 8.3A7 7 0 0 1 6 15.7M9.5 6.2A12 12 0 0 1 9.5 17.8M13 4.1A16 16 0 0 1 13 19.9M16.4 2A20 20 0 0 1 16.4 22"/></svg>`
        ).node);
    }
}
