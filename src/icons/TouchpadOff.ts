import {Icon} from "../Icon.js";

export class TouchpadOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20M2 14H14M22 14H20M12 20V14M2 2 22 22M22 16V6A2 2 0 0 0 20 4H10"/></svg>`
        ).node);
    }
}
