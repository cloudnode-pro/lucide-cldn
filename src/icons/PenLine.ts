import {Icon} from "../Icon.js";

export class PenLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20H21M16.4 3.6A1 1 0 0 1 19.4 6.6L7.4 18.6 6.5 19.1 3.6 20A.5.5 0 0 1 3 19.4L4 16.4 4.4 15.7z"/></svg>`
        ).node);
    }
}
