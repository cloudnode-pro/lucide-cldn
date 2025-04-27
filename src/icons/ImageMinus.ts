import {Icon} from "../Icon.js";

export class ImageMinus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 9V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H12"/><line x1="16" x2="22" y1="5" y2="5"/><circle cx="9" cy="9" r="2"/><path d="M21 15 18 12A2 2 0 0 0 15 12L6 21"/></svg>`
        ).node);
    }
}
