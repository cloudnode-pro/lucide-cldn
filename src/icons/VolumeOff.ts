import {Icon} from "../Icon.js";

export class VolumeOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 9A5 5 0 0 1 17 11.3M19.4 5.6A9 9 0 0 1 21.3 15.6M2 2 22 22M7 7 6.4 7.6A1 1 0 0 1 5.4 8H3A1 1 0 0 0 2 9V15A1 1 0 0 0 3 16H5.4A1 1 0 0 1 6.4 16.4L9.8 19.8A.7.7 0 0 0 11 19.3V11M9.8 4.2A.7.7 0 0 1 11 4.7V5.3"/></svg>`
        ).node);
    }
}
