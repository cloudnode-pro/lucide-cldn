import {Icon} from "../Icon.js";

export class GalleryVerticalEnd extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 2H17M5 6H19"/><rect width="18" height="12" x="3" y="10" rx="2"/></svg>`
        ).node);
    }
}
