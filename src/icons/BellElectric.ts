import {Icon} from "../Icon.js";

export class BellElectric extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.8 4A6.3 8.7 0 0 1 20 9M9 9"/><circle cx="9" cy="9" r="7"/><rect width="10" height="6" x="4" y="16" rx="2"/><path d="M14 19C17 19 18.6 17.4 18.6 17.4"/><circle cx="20" cy="16" r="2"/></svg>`
        ).node);
    }
}
