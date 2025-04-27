import {Icon} from "../Icon.js";

export class VolumeX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4.7A.7.7 0 0 0 9.8 4.2L6.4 7.6A1 1 0 0 1 5.4 8H3A1 1 0 0 0 2 9V15A1 1 0 0 0 3 16H5.4A1 1 0 0 1 6.4 16.4L9.8 19.8A.7.7 0 0 0 11 19.3z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>`
        ).node);
    }
}
