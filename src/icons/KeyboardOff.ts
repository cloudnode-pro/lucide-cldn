import {Icon} from "../Icon.js";

export class KeyboardOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 4A2 2 0 0 1 22 6M22 6V16.4M7 16H16M9.7 4H20M2 2 22 22M20 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 4 4M8 12"/></svg>`
        ).node);
    }
}
