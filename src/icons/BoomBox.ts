import {Icon} from "../Icon.js";

export class BoomBox extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9V5A2 2 0 0 1 6 3H18A2 2 0 0 1 20 5V9M8 8V9M12 8V9M16 8V9"/><rect width="20" height="12" x="2" y="9" rx="2"/><circle cx="8" cy="15" r="2"/><circle cx="16" cy="15" r="2"/></svg>`
        ).node);
    }
}
