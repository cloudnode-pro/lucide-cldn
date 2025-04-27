import {Icon} from "../Icon.js";

export class SignpostBig extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9H4L2 7 4 5H10M14 5H20L22 7 20 9H14M10 22V4A2 2 0 1 1 14 4V22M8 22H16"/></svg>`
        ).node);
    }
}
