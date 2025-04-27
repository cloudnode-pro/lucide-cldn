import {Icon} from "../Icon.js";

export class IdCard extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 10H18M16 14H18M6.2 15A3 3 0 0 1 11.8 15"/><circle cx="9" cy="11" r="2"/><rect width="20" height="14" x="2" y="5" rx="2"/></svg>`
        ).node);
    }
}
