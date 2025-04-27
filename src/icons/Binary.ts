import {Icon} from "../Icon.js";

export class Binary extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="4" height="6" x="14" y="14" rx="2"/><rect width="4" height="6" x="6" y="4" rx="2"/><path d="M6 20H10M14 10H18M6 14H8V20M14 4H16V10"/></svg>`
        ).node);
    }
}
