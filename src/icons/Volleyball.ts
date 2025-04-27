import {Icon} from "../Icon.js";

export class Volleyball extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.1 7.1A17 17 0 0 1 22 11.1M12 12A13 13 0 0 1 3.3 17M16.8 13.6A17 17 0 0 1 7.8 21.1"/><path d="M20.7 17A13 13 0 0 0 12 12 13 13 0 0 1 12 2M6.3 3.8A17 17 0 0 0 8.2 15.3"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
