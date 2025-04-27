import {Icon} from "../Icon.js";

export class PcCase extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M9 6H15M9 10H15"/></svg>`
        ).node);
    }
}
