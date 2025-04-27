import {Icon} from "../Icon.js";

export class LayoutList extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4H21M14 9H21M14 15H21M14 20H21"/></svg>`
        ).node);
    }
}
