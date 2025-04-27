import {Icon} from "../Icon.js";

export class Fingerprint extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10A2 2 0 0 0 10 12L9.7 16M14 13.1C14 15.5 14 19.5 13 22M17.3 21 17.8 18M2 12A10 10 0 0 1 20 6M21.8 16C22 14 21.9 10.6 21.8 10"/><path d="M5 19.5A27 27 0 0 0 6 12L6.3 10M8.7 22 9.2 20M9 6.8A6 6 0 0 1 18 12V14"/></svg>`
        ).node);
    }
}
