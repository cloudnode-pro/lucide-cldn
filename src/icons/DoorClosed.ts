import {Icon} from "../Icon.js";

export class DoorClosed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 20V6A2 2 0 0 0 16 4H8A2 2 0 0 0 6 6V20M2 20H22"/></svg>`
        ).node);
    }
}
