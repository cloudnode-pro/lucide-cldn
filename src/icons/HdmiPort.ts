import {Icon} from "../Icon.js";

export class HdmiPort extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 9A1 1 0 0 0 21 8H3A1 1 0 0 0 2 9V13A1 1 0 0 0 3 14H4L6 16H18L20 14H21A1 1 0 0 0 22 13ZM7.5 12H16.5"/></svg>`
        ).node);
    }
}
