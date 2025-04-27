import {Icon} from "../Icon.js";

export class SmartphoneNfc extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="12" x="2" y="6" rx="1"/><path d="M13 8.3A7 7 0 0 1 13 15.7M16.5 6.2A12 12 0 0 1 16.5 17.8M20 4.1A16 16 0 0 1 20 19.9"/></svg>`
        ).node);
    }
}
