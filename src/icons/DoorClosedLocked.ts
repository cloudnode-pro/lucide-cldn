import {Icon} from "../Icon.js";

export class DoorClosedLocked extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 9V6A2 2 0 0 0 16 4H8A2 2 0 0 0 6 6V20M2 20H10M20 17V15A2 2 0 1 0 16 15V17"/><rect width="8" height="5" x="14" y="17" rx="1"/></svg>`
        ).node);
    }
}
