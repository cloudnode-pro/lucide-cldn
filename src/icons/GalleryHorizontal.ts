import {Icon} from "../Icon.js";

export class GalleryHorizontal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 3V21"/><rect width="12" height="18" x="6" y="3" rx="2"/><path d="M22 3V21"/></svg>`
        ).node);
    }
}
