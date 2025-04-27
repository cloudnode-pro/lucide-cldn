import {Icon} from "../Icon.js";

export class PictureInPicture extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 10H8V4M2 4 8 10M21 10V7A2 2 0 0 0 19 5H12M3 14V16A2 2 0 0 0 5 18H8"/><rect width="10" height="7" x="12" y="14" rx="1"/></svg>`
        ).node);
    }
}
