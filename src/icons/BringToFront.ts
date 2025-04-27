import {Icon} from "../Icon.js";

export class BringToFront extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="8" x="8" y="8" rx="2"/><path d="M4 10A2 2 0 0 1 2 8V4A2 2 0 0 1 4 2H8A2 2 0 0 1 10 4M14 20A2 2 0 0 0 16 22H20A2 2 0 0 0 22 20V16A2 2 0 0 0 20 14"/></svg>`
        ).node);
    }
}
