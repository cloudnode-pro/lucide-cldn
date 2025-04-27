import {Icon} from "../Icon.js";

export class HeadphoneOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 14H19.7M9.1 3.5A9 9 0 0 1 21 12V15.3M2 2 22 22M20.4 20.4A2 2 0 0 1 19 21H18A2 2 0 0 1 16 19V16M3 14H6A2 2 0 0 1 8 16V19A2 2 0 0 1 6 21H5A2 2 0 0 1 3 19V12A9 9 0 0 1 5.6 5.6"/></svg>`
        ).node);
    }
}
