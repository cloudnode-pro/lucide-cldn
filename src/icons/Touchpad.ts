import {Icon} from "../Icon.js";

export class Touchpad extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 14H22M12 20V14"/></svg>`
        ).node);
    }
}
