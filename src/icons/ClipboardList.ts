import {Icon} from "../Icon.js";

export class ClipboardList extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4H18A2 2 0 0 1 20 6V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V6A2 2 0 0 1 6 4H8M12 11H16M12 16H16M8 16"/></svg>`
        ).node);
    }
}
