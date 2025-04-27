import {Icon} from "../Icon.js";

export class DoorOpen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 20H2M11 4.6V20.7A1 1 0 0 0 12.2 21.7L19 20V5.6A2 2 0 0 0 17.5 3.6L13.5 2.6A2 2 0 0 0 11 4.6"/><path d="M11 4H8A2 2 0 0 0 6 6V20M22 20H19"/></svg>`
        ).node);
    }
}
